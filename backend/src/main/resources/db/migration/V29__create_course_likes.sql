CREATE TABLE course_likes (
      id uuid primary key default gen_random_uuid(),
      course_slug VARCHAR(255) NOT NULL,
      user_key VARCHAR(255) NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- один пользователь может лайкнуть курс только один раз
CREATE UNIQUE INDEX ux_course_likes_unique
    ON course_likes(course_slug, user_key);

-- индекс для быстрого подсчета лайков курса
CREATE INDEX idx_course_likes_course_slug
    ON course_likes(course_slug);

CREATE INDEX idx_course_likes_user_key
    ON course_likes(user_key);