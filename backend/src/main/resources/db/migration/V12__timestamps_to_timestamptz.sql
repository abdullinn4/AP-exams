-- users
alter table users
    alter column created_at type timestamptz using created_at at time zone 'UTC',
    alter column updated_at type timestamptz using updated_at at time zone 'UTC';

-- courses
alter table courses
    alter column created_at type timestamptz using created_at at time zone 'UTC',
    alter column updated_at type timestamptz using updated_at at time zone 'UTC';

-- modules
alter table modules
    alter column release_at type timestamptz using release_at at time zone 'UTC';

-- enrollments
alter table enrollments
    alter column access_from type timestamptz using access_from at time zone 'UTC',
    alter column access_to type timestamptz using access_to at time zone 'UTC';

-- test_attempts
alter table test_attempts
    alter column started_at type timestamptz using started_at at time zone 'UTC',
    alter column finished_at type timestamptz using finished_at at time zone 'UTC';

-- module_progress
alter table module_progress
    alter column completed_at type timestamptz using completed_at at time zone 'UTC';

-- notifications
alter table notifications
    alter column created_at type timestamptz using created_at at time zone 'UTC';

-- device_sessions
alter table device_sessions
    alter column last_seen_at type timestamptz using last_seen_at at time zone 'UTC',
    alter column revoked_at type timestamptz using revoked_at at time zone 'UTC';

-- audit_log
alter table audit_log
    alter column created_at type timestamptz using created_at at time zone 'UTC';

-- curator_contact_events
alter table curator_contact_events
    alter column created_at type timestamptz using created_at at time zone 'UTC';
