create table question_bank (
    id uuid primary key default gen_random_uuid(),
    course_id uuid not null references courses(id),
    tags_json jsonb,
    type varchar(50) not null ,
    prompt text not null ,
    options_json jsonb,
    answer_key_json jsonb,
    explanation text
);

create table tests (
    id uuid primary key default gen_random_uuid(),
    course_id uuid not null references courses(id),
    module_id uuid references modules(id),
    type varchar(50) not null, -- module_test/mock_exam
    title varchar(255) not null,
    time_limit_sec int,
    attempts_limit int,
    min_tier varchar(20) not null default 'BASIC',
    is_published boolean not null default false
);