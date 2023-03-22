-- Revert schema:appschema from pg

BEGIN;

-- XXX Add DDLs here.
DROP SCHEMA todo;

COMMIT;
