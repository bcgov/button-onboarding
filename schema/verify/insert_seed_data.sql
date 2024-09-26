-- Verify schema:insert_seed_data on pg

BEGIN;

-- XXX Add verifications here.
SELECT id, task, completed, date_created, date_updated 
 FROM todo_app.tasks;

ROLLBACK;
