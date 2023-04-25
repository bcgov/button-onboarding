-- Deploy schema:insert_seed_data to pg
-- requires: todo_appschema
-- requires: tasks

begin;

-- XXX Add DDLs here.
insert into
     todo_app.tasks (id, task, completed)
 values
     (1, 'Make bed', false),
     (2, 'Shower', false),
     (3, 'Write todo list', true),
     (4, 'Learn to hack', false),
     (5, 'Lunch with Julia', false),
     (6, 'Buy groceries', false),
     (7, 'Feed dog', true);

commit;
