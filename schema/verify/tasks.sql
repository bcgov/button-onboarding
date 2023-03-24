-- Verify schema:todo on pg

BEGIN;

-- XXX Add verifications here.
SELECT id, task, completed, date_created, date_updated
 FROM todo_app.tasks
 WHERE FALSE;

ROLLBACK;
