create table curator_contact_events (
     id uuid primary key default gen_random_uuid(),
     user_id uuid not null references users(id),
     course_id uuid not null references courses(id),
     module_id uuid not null references modules(id),
     created_at timestamp not null default now(),
     meta_json jsonb
);