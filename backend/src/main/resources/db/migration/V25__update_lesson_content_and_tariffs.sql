
-- 1. Изменить тип video_payload с jsonb на text
ALTER TABLE lesson_content
    ALTER COLUMN video_payload TYPE text USING video_payload::text;

-- 2. Переименовать колонку lemonsqueezy_variant_id на paddle_variant_id
ALTER TABLE tariffs
    RENAME COLUMN lemonsqueezy_variant_id TO paddle_variant_id;