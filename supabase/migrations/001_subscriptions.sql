-- FINCORE: one row per user with their plan.
-- Run once in Supabase → SQL Editor. Safe to re-run.
-- Users can only READ their own row; only the dashboard / server (service role)
-- can change plans, so nobody can upgrade themselves from the browser.

create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users (id) on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'plus', 'pro', 'institutional')),
  status text not null default 'active' check (status in ('active', 'trialing', 'past_due', 'canceled')),
  current_period_end timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.subscriptions enable row level security;

drop policy if exists "read own subscription" on public.subscriptions;
create policy "read own subscription" on public.subscriptions
  for select to authenticated using ((select auth.uid()) = user_id);

-- Every new account starts on Free.
create or replace function public.handle_new_user_subscription()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.subscriptions (user_id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_subscription on auth.users;
create trigger on_auth_user_created_subscription
  after insert on auth.users
  for each row execute function public.handle_new_user_subscription();

-- Users who signed up before this table existed.
insert into public.subscriptions (user_id)
select id from auth.users on conflict do nothing;

create or replace function public.touch_subscription()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
drop trigger if exists subscriptions_touch on public.subscriptions;
create trigger subscriptions_touch before update on public.subscriptions
  for each row execute function public.touch_subscription();

-- Totals per plan, for the dashboard. security_invoker keeps RLS in force,
-- so through the public API a user only ever counts their own row.
create or replace view public.plan_counts with (security_invoker = true) as
select plan, status, count(*)::int as users
from public.subscriptions
group by plan, status
order by plan, status;
