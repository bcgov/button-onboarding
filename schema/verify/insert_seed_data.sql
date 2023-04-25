-- Verify schema:insert_seed_data on pg

begin;

-- XXX Add verifications here.
select id, task, completed, date_created, date_updated 
 from todo_app.tasks;

rollback;
