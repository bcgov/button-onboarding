-- Revert schema:insert_seed_data from pg

BEGIN;

-- XXX Add DDLs here.
TRUNCATE TABLE todo_app.tasks;

COMMIT;
