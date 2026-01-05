create table tariffs(
    id uuid primary key default gen_random_uuid(),
    course_id uuid not null references courses(id) on delete cascade,
    title varchar(100) not null,
    tier varchar(20) not null,
    price_cents int not null,
    currency varchar(3) not null default 'USD',
    is_active boolean not null default true
);

create table enrollments(
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references users(id) on delete cascade,
    course_id uuid not null references courses(id) on delete cascade,
    tariff_id uuid not null references tariffs(id) on delete cascade,
    tier varchar(20) not null,
    access_from timestamp not null default now(),
    access_to timestamp,
    status varchar(20) not null default 'ACTIVE'
);