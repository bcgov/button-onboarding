-- Verify schema:appschema on pg

BEGIN;

-- XXX Add verifications here.
SELECT pg_catalog.has_schema_privilege('todo', 'usage');

SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'todo';

DO $$
BEGIN
   ASSERT (SELECT has_schema_privilege('todo', 'usage'));
END $$;

ROLLBACK;
