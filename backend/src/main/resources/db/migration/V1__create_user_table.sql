CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA public;

create table users(
    id uuid primary key default gen_random_uuid(),
    email varchar(255) not null unique,
    password_hash varchar(255) not null,
    discord_nickname varchar(255),
    status varchar(20) not null default 'ACTIVE',
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);