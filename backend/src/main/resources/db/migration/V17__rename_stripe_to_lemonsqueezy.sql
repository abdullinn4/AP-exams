-- Переименовываем колонки в orders
ALTER TABLE orders RENAME COLUMN stripe_session_id TO lemonsqueezy_checkout_id;
ALTER TABLE orders RENAME COLUMN stripe_payment_intent_id TO lemonsqueezy_order_id;

-- Переименовываем индекс
DROP INDEX IF EXISTS idx_orders_stripe_session_id;
CREATE INDEX idx_orders_lemonsqueezy_checkout_id ON orders(lemonsqueezy_checkout_id);

-- Добавляем поле для LemonSqueezy variant ID в tariffs
ALTER TABLE tariffs ADD COLUMN lemonsqueezy_variant_id VARCHAR(255);