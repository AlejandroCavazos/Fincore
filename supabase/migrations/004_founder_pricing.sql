-- FINCORE: founder price for the first 50 people who take a paid plan.
-- Run in Supabase → SQL Editor after 001 and 002. Safe to re-run.
--
-- Rules (the server decides, never the browser):
-- * 50 spots shared by Plus and Pro, monthly or annual.
-- * A spot is counted by the person who got it, forever: losing it never frees it.
-- * The founder keeps the price while the subscription stays active, including
--   renewals, monthly↔annual switches, Plus↔Pro changes and allowed pauses.
-- * Cancelling (subscription ends) or going back to Free after a failed payment
--   loses it for good.

-- Billing period, founder flag and pause status on each subscription.
alter table public.subscriptions add column if not exists billing text not null default 'monthly';
alter table public.subscriptions add column if not exists founder boolean not null default false;
alter table public.subscriptions add column if not exists founder_lost_at timestamptz;
alter table public.subscriptions drop constraint if exists subscriptions_billing_check;
alter table public.subscriptions add constraint subscriptions_billing_check check (billing in ('monthly', 'annual'));
alter table public.subscriptions drop constraint if exists subscriptions_status_check;
alter table public.subscriptions add constraint subscriptions_status_check check (status in ('active', 'trialing', 'past_due', 'paused', 'canceled'));

-- One row per person who ever got the founder price (never deleted, no FK on purpose).
create table if not exists public.founder_spots (
  user_id uuid primary key,
  granted_at timestamptz not null default now()
);
alter table public.founder_spots enable row level security;
-- Nobody reads or writes it from the browser; only the functions below.

create or replace function public.founder_spots_total() returns int language sql immutable as $$ select 50 $$;

-- Real count for the pricing page: "Quedan X de 50".
create or replace function public.founder_spots_left()
returns int language sql stable security definer set search_path = '' as $$
  select greatest(0, public.founder_spots_total() - (select count(*)::int from public.founder_spots));
$$;
revoke all on function public.founder_spots_left() from public;
grant execute on function public.founder_spots_left() to anon, authenticated;

-- Losing the founder price: the subscription ended or went back to Free.
create or replace function public.subscriptions_founder_guard()
returns trigger language plpgsql set search_path = '' as $$
begin
  if (new.plan = 'free' or new.status = 'canceled') and (new.founder or (tg_op = 'UPDATE' and old.founder)) then
    new.founder := false;
    new.founder_lost_at := coalesce(new.founder_lost_at, now());
  end if;
  return new;
end;
$$;
drop trigger if exists subscriptions_founder_guard on public.subscriptions;
create trigger subscriptions_founder_guard
  before insert or update on public.subscriptions
  for each row execute function public.subscriptions_founder_guard();

-- Decides, atomically, whether this user pays the founder price for a paid plan.
-- Used by checkout (and by the test-mode chooser below). Returns true/false.
-- p_expect_founder: the price the user saw. If they saw the founder price but the
-- last spot was just taken, raises 'founder_sold_out' so the app can show the
-- normal price and ask again before charging.
create or replace function public.take_founder_spot(p_user uuid, p_expect_founder boolean)
returns boolean language plpgsql security definer set search_path = '' as $$
declare
  cur public.subscriptions%rowtype;
begin
  -- One at a time: two people can never take the last spot together.
  lock table public.founder_spots in exclusive mode;
  select * into cur from public.subscriptions where user_id = p_user;
  -- Already a founder with an uninterrupted paid subscription: keeps it.
  if found and cur.founder and cur.plan <> 'free' and cur.status <> 'canceled' then
    return true;
  end if;
  -- Got a spot before and lost it: never again.
  if exists (select 1 from public.founder_spots where user_id = p_user) then
    if p_expect_founder then raise exception 'founder_sold_out'; end if;
    return false;
  end if;
  if (select count(*) from public.founder_spots) < public.founder_spots_total() then
    insert into public.founder_spots (user_id) values (p_user);
    return true;
  end if;
  if p_expect_founder then raise exception 'founder_sold_out'; end if;
  return false;
end;
$$;
revoke all on function public.take_founder_spot(uuid, boolean) from public, anon, authenticated;

-- TEST MODE ONLY (replaces the one from 002): pick a plan and billing for $0.
-- Turn it off before charging real money with:
--   drop function if exists public.choose_plan_free(text, text, boolean);
drop function if exists public.choose_plan_free(text);
create or replace function public.choose_plan_free(p_plan text, p_billing text default 'monthly', p_expect_founder boolean default false)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  is_founder boolean := false;
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if p_plan not in ('free', 'plus', 'pro') then raise exception 'unknown plan'; end if;
  if p_billing not in ('monthly', 'annual') then raise exception 'unknown billing'; end if;
  if p_plan <> 'free' then
    is_founder := public.take_founder_spot(auth.uid(), p_expect_founder);
  end if;
  insert into public.subscriptions (user_id, plan, status, billing, founder)
  values (auth.uid(), p_plan, 'active', p_billing, is_founder)
  on conflict (user_id) do update set plan = excluded.plan, status = 'active', billing = excluded.billing, founder = excluded.founder, updated_at = now();
  return jsonb_build_object('plan', p_plan, 'billing', p_billing, 'founder', is_founder);
end;
$$;
revoke all on function public.choose_plan_free(text, text, boolean) from public, anon;
grant execute on function public.choose_plan_free(text, text, boolean) to authenticated;
