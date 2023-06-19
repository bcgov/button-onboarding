-- Revert todo:dummy_data from pg

BEGIN;

DELETE FROM todo_app.todos;

COMMIT;
