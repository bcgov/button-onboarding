-- Verify schema:todo on pg

begin;

-- XXX Add verifications here.
select id, task, completed, date_created, date_updated
 from todo_app.tasks
 where false;

rollback;
