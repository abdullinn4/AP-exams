-- Добавляем каскадное удаление для внешних ключей, связанных с курсами

-- 1. question_bank.course_id -> courses
ALTER TABLE question_bank
    DROP CONSTRAINT IF EXISTS question_bank_course_id_fkey,
    ADD CONSTRAINT question_bank_course_id_fkey
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE;

-- 2. tests.course_id -> courses
ALTER TABLE tests
    DROP CONSTRAINT IF EXISTS tests_course_id_fkey,
    ADD CONSTRAINT tests_course_id_fkey
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE;

-- 3. tests.lesson_id -> lessons
ALTER TABLE tests
    DROP CONSTRAINT IF EXISTS tests_lesson_id_fkey,
    ADD CONSTRAINT tests_lesson_id_fkey
        FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE;

-- 4. lesson_progress.lesson_id -> lessons
ALTER TABLE lesson_progress
    DROP CONSTRAINT IF EXISTS lesson_progress_lesson_id_fkey,
    ADD CONSTRAINT lesson_progress_lesson_id_fkey
        FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE;

-- 5. lesson_progress.user_id -> users
ALTER TABLE lesson_progress
    DROP CONSTRAINT IF EXISTS lesson_progress_user_id_fkey,
    ADD CONSTRAINT lesson_progress_user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- 6. orders.course_id -> courses
ALTER TABLE orders
    DROP CONSTRAINT IF EXISTS orders_course_id_fkey,
    ADD CONSTRAINT orders_course_id_fkey
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE SET NULL;

-- 7. orders.tariff_id -> tariffs
ALTER TABLE orders
    DROP CONSTRAINT IF EXISTS orders_tariff_id_fkey,
    ADD CONSTRAINT orders_tariff_id_fkey
        FOREIGN KEY (tariff_id) REFERENCES tariffs(id) ON DELETE SET NULL;
