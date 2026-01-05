create table audit_log (
     id uuid primary key default gen_random_uuid(),
     actor_user_id uuid,
     action varchar(255) not null,
     entity_type varchar(100),
     entity_id uuid,
     payload_json jsonb,
     created_at timestamp not null default now(),
     ip varchar(50),
     user_agent text
);
