create table test_attempts (
     id uuid primary key default gen_random_uuid(),
     test_id uuid not null references tests(id) on delete cascade ,
     user_id uuid not null references users(id) on delete cascade,
     started_at timestamp not null default now(),
     finished_at timestamp,
     answers_json jsonb,
     score numeric,
     result_json jsonb
);