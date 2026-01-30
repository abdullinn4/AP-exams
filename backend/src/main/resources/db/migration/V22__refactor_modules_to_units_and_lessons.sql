-- Создаем таблицу units
CREATE TABLE units (
                       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
                       title VARCHAR(255) NOT NULL,
                       snippet VARCHAR(255),
                       description TEXT,
                       icon_url TEXT,
                       order_index INT NOT NULL,
                       is_published BOOLEAN NOT NULL DEFAULT false,
                       created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                       updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Переименовываем modules в lessons
ALTER TABLE modules RENAME TO lessons;

-- Добавляем колонку unit_id в lessons
ALTER TABLE lessons ADD COLUMN unit_id UUID;

-- Удаляем старую колонку course_id из lessons
ALTER TABLE lessons DROP COLUMN course_id;

-- Делаем unit_id обязательным
ALTER TABLE lessons ALTER COLUMN unit_id SET NOT NULL;
ALTER TABLE lessons ADD CONSTRAINT fk_lessons_unit FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE;

-- Переименовываем module_content в lesson_content
ALTER TABLE module_content RENAME TO lesson_content;
ALTER TABLE lesson_content RENAME COLUMN module_id TO lesson_id;

-- Переименовываем module_progress в lesson_progress
ALTER TABLE module_progress RENAME TO lesson_progress;
ALTER TABLE lesson_progress RENAME COLUMN module_id TO lesson_id;

-- Обновляем tests: переименовываем module_id в lesson_id
ALTER TABLE tests RENAME COLUMN module_id TO lesson_id;

-- Обновляем индексы и ограничения
-- Индексы
CREATE INDEX idx_units_course_id ON units(course_id);
CREATE INDEX idx_units_order ON units(course_id, order_index);
CREATE INDEX idx_lessons_unit_id ON lessons(unit_id);
CREATE INDEX idx_lessons_order ON lessons(unit_id, order_index);
CREATE INDEX idx_lesson_progress_user_lesson ON lesson_progress(user_id, lesson_id);