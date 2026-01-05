create table module_content(
    module_id uuid primary key references modules(id) on delete cascade,
    video_payload jsonb,
    text_payload text
);