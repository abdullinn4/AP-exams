create table courses(
    id uuid primary key default gen_random_uuid(),
    title varchar(255) not null,
    slug varchar(100) not null unique,
    description text,
    preview_video_url text,
    cover_url text,
    status varchar(20) not null default 'DRAFT',
    discord_invite_url text,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);

create table modules(
    id uuid primary key default gen_random_uuid(),
    course_id uuid not null references courses(id) on delete cascade,
    title varchar(255) not null,
    order_index int not null,
    release_at timestamp
);