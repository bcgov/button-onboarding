-- Deploy schema:tasks to pg
-- requires: todo_appschema

begin;

set client_min_messages = 'warning';

create table todo_app.tasks (
    id           serial      primary key,
    task         text        not null,
    completed    boolean     not null default false,
    date_created timestamp not null default now(),
    date_updated timestamp not null default now()
);

commit;
