create table device_sessions (
     id uuid primary key default gen_random_uuid(),
     user_id uuid not null references users(id),
     device_id varchar(255) not null,
     refresh_token_id uuid,
     last_seen_at timestamp not null default now(),
     revoked_at timestamp
);
