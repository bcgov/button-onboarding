-- Verify schema:todo_appschema on pg

BEGIN;

-- XXX Add verifications here.
SELECT pg_catalog.has_schema_privilege('todo_app', 'usage');

SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'todo_app';

DO $$
BEGIN
   ASSERT (SELECT has_schema_privilege('todo_app', 'usage'));
END $$;

ROLLBACK;
