-- Revert schema:todo_appschema from pg

BEGIN;

-- XXX Add DDLs here.
DROP SCHEMA todo_app;

COMMIT;
