-- Добавляем столбец image_url в таблицу question_bank
ALTER TABLE question_bank ADD COLUMN IF NOT EXISTS image_url VARCHAR(500);