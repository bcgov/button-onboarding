-- Deploy todo:todos to pg
-- requires: appschema

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE todo_app.todos (
    id SERIAL PRIMARY KEY,
    task TEXT,
    completed BOOLEAN DEFAULT FALSE,
    date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    date_updated TIMESTAMPTZ
);

COMMIT;
