create table module_progress (
     id uuid primary key default gen_random_uuid(),
     user_id uuid not null references users(id),
     module_id uuid not null references modules(id),
     status varchar(20) not null default 'NOT_STARTED', -- not_started/in_progress/completed
     completed_at timestamp
);