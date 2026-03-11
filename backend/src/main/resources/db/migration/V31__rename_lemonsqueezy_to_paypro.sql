-- Переименовываем колонки в orders
ALTER TABLE orders RENAME COLUMN lemonsqueezy_checkout_id TO paypro_checkout_id;
ALTER TABLE orders RENAME COLUMN lemonsqueezy_order_id TO paypro_order_id;

-- Переименовываем индекс
DROP INDEX IF EXISTS idx_orders_lemonsqueezy_checkout_id;
CREATE INDEX idx_orders_paypro_checkout_id ON orders(paypro_checkout_id);

-- Переименовываем поле в tariffs
ALTER TABLE tariffs RENAME COLUMN paddle_variant_id TO paypro_variant_id;

-- Обновляем поле paddle_variant_id на paypro_variant_id
-- ALTER TABLE tariffs RENAME COLUMN paddle_variant_id TO paypro_variant_id;