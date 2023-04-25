-- Revert schema:todo_appschema from pg

begin;

-- XXX Add DDLs here.
drop schema todo_app;

commit;
