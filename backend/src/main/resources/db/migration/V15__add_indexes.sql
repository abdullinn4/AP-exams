-- USERS TABLE
-- Поиск по email (login)
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Фильтрация по статусу
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);

-- Фильтрация по роли
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Составной индекс для активных пользователей определённой роли
CREATE INDEX IF NOT EXISTS idx_users_status_role ON users(status, role);


-- COURSES TABLE
-- Поиск по slug (для URL)
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);

-- Фильтрация по публикации
CREATE INDEX IF NOT EXISTS idx_courses_is_published ON courses(status) where status= 'PUBLISHED';

-- Сортировка по дате создания
CREATE INDEX IF NOT EXISTS idx_courses_created_at ON courses(created_at DESC);


-- MODULES TABLE
-- Получение модулей курса
CREATE INDEX IF NOT EXISTS idx_modules_course_id ON modules(course_id);

-- Получение модулей курса с сортировкой
CREATE INDEX IF NOT EXISTS idx_modules_course_order ON modules(course_id, order_index);



-- TARIFFS TABLE
-- Получение тарифов курса
CREATE INDEX IF NOT EXISTS idx_tariffs_course_id ON tariffs(course_id);

-- Получение тарифов по tier
CREATE INDEX IF NOT EXISTS idx_tariffs_tier ON tariffs(tier);

-- Активные тарифы курса
CREATE INDEX IF NOT EXISTS idx_tariffs_course_active ON tariffs(course_id, is_active);


-- ENROLLMENTS TABLE
-- Получение enrollments пользователя
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON enrollments(user_id);

-- Получение enrollments курса
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON enrollments(course_id);

-- Проверка доступа (user + course)
CREATE INDEX IF NOT EXISTS idx_enrollments_user_course ON enrollments(user_id, course_id);

-- Фильтрация по статусу
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);

-- Поиск истекающих подписок
CREATE INDEX IF NOT EXISTS idx_enrollments_expires_at ON enrollments(status) WHERE status = 'EXPIRED';

-- Активные подписки пользователя
CREATE INDEX IF NOT EXISTS idx_enrollments_user_active ON enrollments(user_id, status) WHERE status = 'ACTIVE';


-- QUESTION_BANK TABLE
-- Получение вопросов курса
CREATE INDEX IF NOT EXISTS idx_questions_course_id ON question_bank(course_id);

-- Фильтрация по типу вопроса
CREATE INDEX IF NOT EXISTS idx_questions_type ON question_bank(type);

-- Поиск по тегам (GIN индекс для JSONB)
CREATE INDEX IF NOT EXISTS idx_questions_tags ON question_bank USING GIN (tags_json);


-- TESTS TABLE
-- Получение тестов курса
CREATE INDEX IF NOT EXISTS idx_tests_course_id ON tests(course_id);

-- Получение тестов модуля
CREATE INDEX IF NOT EXISTS idx_tests_module_id ON tests(module_id) WHERE module_id IS NOT NULL;

-- Фильтрация по типу теста
CREATE INDEX IF NOT EXISTS idx_tests_type ON tests(type);

-- Фильтрация по публикации
CREATE INDEX IF NOT EXISTS idx_tests_is_published ON tests(is_published);

-- Получение доступных тестов для tier
CREATE INDEX IF NOT EXISTS idx_tests_min_tier ON tests(min_tier);

-- Опубликованные тесты курса
CREATE INDEX IF NOT EXISTS idx_tests_course_published ON tests(course_id, is_published);


-- TEST_QUESTIONS TABLE
-- Получение вопросов теста с сортировкой
CREATE INDEX IF NOT EXISTS idx_test_questions_test_order ON test_questions(test_id, order_index);

-- Поиск тестов, содержащих вопрос
CREATE INDEX IF NOT EXISTS idx_test_questions_question_id ON test_questions(question_id);


-- TEST_ATTEMPTS TABLE
-- Получение попыток пользователя
CREATE INDEX IF NOT EXISTS idx_attempts_user_id ON test_attempts(user_id);

-- Получение попыток теста
CREATE INDEX IF NOT EXISTS idx_attempts_test_id ON test_attempts(test_id);

-- Получение попыток пользователя по тесту
CREATE INDEX IF NOT EXISTS idx_attempts_user_test ON test_attempts(user_id, test_id);

-- Сортировка по дате начала
CREATE INDEX IF NOT EXISTS idx_attempts_started_at ON test_attempts(started_at DESC);

-- Завершённые попытки
CREATE INDEX IF NOT EXISTS idx_attempts_finished ON test_attempts(user_id, test_id, finished_at) WHERE finished_at IS NOT NULL;


-- MODULE_PROGRESS TABLE
-- Получение прогресса пользователя
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON module_progress(user_id);

-- Получение прогресса модуля
CREATE INDEX IF NOT EXISTS idx_progress_module_id ON module_progress(module_id);

-- Фильтрация по статусу
CREATE INDEX IF NOT EXISTS idx_progress_status ON module_progress(status);

-- Завершённые модули пользователя
CREATE INDEX IF NOT EXISTS idx_progress_user_completed ON module_progress(user_id, status) WHERE status = 'COMPLETED';


-- NOTIFICATIONS TABLE
-- Получение уведомлений пользователя
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);

-- Сортировка по дате создания
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at DESC);

-- Фильтрация по статусу
CREATE INDEX IF NOT EXISTS idx_notifications_status ON notifications(status);

-- Непрочитанные уведомления пользователя
CREATE INDEX IF NOT EXISTS idx_notifications_user_unread ON notifications(user_id, status, created_at DESC) WHERE status = 'UNREAD';

-- Фильтрация по типу
CREATE INDEX IF NOT EXISTS idx_notifications_type ON notifications(type);


-- DEVICE_SESSIONS TABLE
-- Получение сессий пользователя
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON device_sessions(user_id);

-- Поиск по refresh token
CREATE INDEX IF NOT EXISTS idx_sessions_refresh_token ON device_sessions(refresh_token_id);

-- Активные сессии
CREATE INDEX IF NOT EXISTS idx_device_sessions_active ON device_sessions(revoked_at) WHERE revoked_at IS NULL;
-- Активные сессии (не revoked и не слишком старые)
CREATE INDEX IF NOT EXISTS idx_device_sessions_active ON device_sessions(user_id, revoked_at) WHERE revoked_at IS NULL;


-- AUDIT_LOG TABLE
-- Получение логов пользователя
CREATE INDEX IF NOT EXISTS idx_audit_actor_user_id ON audit_log(actor_user_id) WHERE actor_user_id IS NOT NULL;

-- Фильтрация по действию
CREATE INDEX IF NOT EXISTS idx_audit_action ON audit_log(action);

-- Фильтрация по entity
CREATE INDEX IF NOT EXISTS idx_audit_entity_type ON audit_log(entity_type);

-- Поиск по конкретной entity
CREATE INDEX IF NOT EXISTS idx_audit_entity_type_id ON audit_log(entity_type, entity_id);

-- Сортировка по времени
CREATE INDEX IF NOT EXISTS idx_audit_created_at ON audit_log(created_at DESC);

-- Логи пользователя за период
CREATE INDEX IF NOT EXISTS idx_audit_actor_user_created ON audit_log(actor_user_id, created_at DESC);

-- CURATOR_CONTACT_EVENTS TABLE
-- Получение событий пользователя
CREATE INDEX IF NOT EXISTS idx_curator_events_user_id ON curator_contact_events(user_id);

-- Сортировка по времени
CREATE INDEX IF NOT EXISTS idx_curator_events_timestamp ON curator_contact_events(created_at DESC);

-- События пользователя по времени
CREATE INDEX IF NOT EXISTS idx_curator_events_user_timestamp ON curator_contact_events(user_id, created_at DESC);