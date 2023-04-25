-- Verify schema:todo_appschema on pg

begin;

-- XXX Add verifications here.
select pg_catalog.has_schema_privilege('todo_app', 'usage');

select 1/count(*) from information_schema.schemata where schema_name = 'todo_app';

do $$
begin
   assert (select has_schema_privilege('todo_app', 'usage'));
end $$;

rollback;
