-- Local check of 004 (plain Postgres, not Supabase): creates fake auth schema, 52 users, and checks user 50/51, cancel and return, plan switches.
-- Run after 001, 002, 004 on an empty database.
create role anon; create role authenticated;
create schema auth;
create table auth.users (id uuid primary key default gen_random_uuid(), email text);
create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('test.uid', true), '')::uuid $$;
grant usage on schema auth to anon, authenticated, public;
\set ON_ERROR_STOP 0
insert into auth.users (email) select 'u'||g||'@x.mx' from generate_series(1,52) g;
create function pick(n int, plan text, billing text, expect boolean) returns jsonb language plpgsql as $$
declare u uuid; r jsonb; begin
  select id into u from auth.users where email = 'u'||n||'@x.mx';
  perform set_config('test.uid', u::text, true);
  r := public.choose_plan_free(plan, billing, expect);
  return r;
end $$;
-- 49 users take founder spots
select count(*) filter (where (pick(g, case when g%2=0 then 'plus' else 'pro' end, case when g%3=0 then 'annual' else 'monthly' end, true)->>'founder')::boolean) as founders_1_49 from generate_series(1,49) g;
select public.founder_spots_left() as left_after_49;
select pick(50,'plus','monthly',true)->>'founder' as user50;
select public.founder_spots_left() as left_after_50;
select pick(51,'plus','monthly',true) as user51_expect_founder;  -- must fail founder_sold_out
select pick(51,'plus','monthly',false)->>'founder' as user51_after_confirm;
-- founder changes: plus->pro annual keeps founder
select pick(2,'pro','annual',true)->>'founder' as founder_switch;
-- paused keeps
update public.subscriptions set status='paused' where user_id=(select id from auth.users where email='u4@x.mx');
select pick(4,'plus','annual',true)->>'founder' as paused_keeps;
-- cancel then return
select pick(6,'free','monthly',false)->>'founder' as cancel;
select founder, founder_lost_at is not null as lost from public.subscriptions where user_id=(select id from auth.users where email='u6@x.mx');
select pick(6,'plus','monthly',false)->>'founder' as returned_founder;
-- canceled status by billing system
update public.subscriptions set status='canceled' where user_id=(select id from auth.users where email='u8@x.mx');
select founder from public.subscriptions where user_id=(select id from auth.users where email='u8@x.mx');
select public.founder_spots_left() as left_still_0, (select count(*) from public.founder_spots) as spots;
-- privileges
set role anon; select public.founder_spots_left() as anon_can_count; select count(*) from public.founder_spots; reset role;
set role authenticated; select public.take_founder_spot(gen_random_uuid(), false); reset role;
