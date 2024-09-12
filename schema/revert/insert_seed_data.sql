-- Revert schema:insert_seed_data from pg

begin;

-- XXX Add DDLs here.
truncate table todo_app.tasks;

commit;
