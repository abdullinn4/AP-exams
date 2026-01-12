-- Таблица заказов (нужна для Stripe webhook и истории платежей)
CREATE TABLE orders (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID NOT NULL REFERENCES users(id),
     course_id UUID NOT NULL REFERENCES courses(id),
     tariff_id UUID NOT NULL REFERENCES tariffs(id),
     stripe_session_id VARCHAR(255) UNIQUE,
     stripe_payment_intent_id VARCHAR(255),
     status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
     amount_cents INTEGER NOT NULL,
     currency VARCHAR(3) NOT NULL DEFAULT 'USD',
     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
     completed_at TIMESTAMPTZ
);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_stripe_session_id ON orders(stripe_session_id);
CREATE INDEX idx_orders_status ON orders(status);