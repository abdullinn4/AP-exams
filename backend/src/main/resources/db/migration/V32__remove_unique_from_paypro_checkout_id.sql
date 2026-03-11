-- Удаляем UNIQUE constraint с paypro_checkout_id
-- Несколько orders могут иметь один checkoutId (при покупке нескольких курсов)
ALTER TABLE orders DROP CONSTRAINT IF EXISTS orders_stripe_session_id_key;