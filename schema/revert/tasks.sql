-- Revert schema:todo from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE todo_app.tasks;

COMMIT;
