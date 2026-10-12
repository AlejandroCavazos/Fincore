-- TEST MODE ONLY: lets a signed-in user pick any plan for free from the Plans page.
-- Run in Supabase → SQL Editor after 001. Turn it off before charging real money
-- with:  drop function if exists public.choose_plan_free(text);
create or replace function public.choose_plan_free(p_plan text)
returns text language plpgsql security definer set search_path = '' as $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  if p_plan not in ('free', 'plus', 'pro', 'institutional') then
    raise exception 'unknown plan';
  end if;
  insert into public.subscriptions (user_id, plan, status)
  values (auth.uid(), p_plan, 'active')
  on conflict (user_id) do update set plan = excluded.plan, status = 'active';
  return p_plan;
end;
$$;
revoke all on function public.choose_plan_free(text) from public, anon;
grant execute on function public.choose_plan_free(text) to authenticated;
