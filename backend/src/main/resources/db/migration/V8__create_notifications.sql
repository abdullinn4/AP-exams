create table notifications (
     id uuid primary key default gen_random_uuid(),
     user_id uuid not null references users(id),
     type varchar(50) not null,
     payload_json jsonb,
     status varchar(20) not null default 'UNREAD', -- unread/read
     created_at timestamp not null default now()
);