-- Deploy todo:dummy_data to pg
-- requires: todos

BEGIN;

INSERT INTO todo_app.todos (task, completed, date_updated)
VALUES ('Part 1', True, null);
INSERT INTO todo_app.todos (task, completed, date_updated)
VALUES ('Part 2', False, null);
INSERT INTO todo_app.todos (task, completed, date_updated)
VALUES ('Part 3', False, null);
INSERT INTO todo_app.todos (task, completed, date_updated)
VALUES ('Part 4', False, null);
INSERT INTO todo_app.todos (task, completed, date_updated)
VALUES ('Part 5', False, null);
INSERT INTO todo_app.todos (task, completed, date_updated)
VALUES ('Part 6', False, null);

COMMIT;
