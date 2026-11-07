-- Temporary public access until auth is added.
create policy "Public can read notes"
  on public.notes for select
  to anon, authenticated
  using (true);

create policy "Public can insert notes"
  on public.notes for insert
  to anon, authenticated
  with check (true);
