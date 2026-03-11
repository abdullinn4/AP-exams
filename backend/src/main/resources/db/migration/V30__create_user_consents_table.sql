CREATE TABLE user_consents (
       id uuid primary key default gen_random_uuid(),
       email VARCHAR(255) NOT NULL,
       checkout_id VARCHAR(36) NOT NULL,
       accepted_terms BOOLEAN NOT NULL,
       accepted_at timestamptz NOT NULL,
       ip_address VARCHAR(45) NOT NULL,
       user_agent TEXT NOT NULL,
       created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_email ON user_consents(email);
CREATE INDEX idx_checkout_id ON user_consents(checkout_id);
CREATE INDEX idx_created_at ON user_consents(created_at);