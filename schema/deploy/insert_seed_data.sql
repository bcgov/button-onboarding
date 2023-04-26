-- Deploy schema:insert_seed_data to pg
-- requires: todo_appschema
-- requires: tasks

begin;

-- XXX Add DDLs here.
insert into
     todo_app.tasks (task, completed)
 values
     ('Make bed', false),
     ('Shower', false),
     ('Write todo list', true),
     ('Learn to hack', false),
     ('Lunch with Julia', false),
     ('Buy groceries', false),
     ('Feed dog', true);

commit;
