-- FINCORE: saves each user's progress in their account so they can continue
-- in any browser. Run once in Supabase → SQL Editor. Safe to re-run.
-- Each user can only read and write their own row.

create table if not exists public.user_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  -- Course progress, XP, attempts, lab, etc. (the app's AppState).
  state jsonb not null,
  -- Lives system state.
  lives jsonb,
  updated_at timestamptz not null default now(),
  -- Keep rows reasonable (about 4 MB max).
  constraint user_progress_size check (pg_column_size(state) + coalesce(pg_column_size(lives), 0) < 4000000)
);

alter table public.user_progress enable row level security;

drop policy if exists "read own progress" on public.user_progress;
create policy "read own progress" on public.user_progress
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "insert own progress" on public.user_progress;
create policy "insert own progress" on public.user_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "update own progress" on public.user_progress;
create policy "update own progress" on public.user_progress
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Server clock for updated_at (the device clock is not trusted).
create or replace function public.touch_user_progress()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists user_progress_touch on public.user_progress;
create trigger user_progress_touch
  before insert or update on public.user_progress
  for each row execute function public.touch_user_progress();
