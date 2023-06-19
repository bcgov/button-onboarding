-- Verify todo:dummy_data on pg

BEGIN;

SELECT id, task, completed, date_created, date_updated
FROM todo_app.todos
WHERE completed = FALSE;

ROLLBACK;
