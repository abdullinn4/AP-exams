-- Удаляем столбец attempts_limit из таблицы tests
ALTER TABLE tests DROP COLUMN IF EXISTS attempts_limit;