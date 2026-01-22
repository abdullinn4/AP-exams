CREATE TABLE promo_codes (
                             id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                             code VARCHAR(50) UNIQUE NOT NULL,
                             discount_percent INTEGER NOT NULL CHECK (discount_percent > 0 AND discount_percent <= 100),
                             type VARCHAR(50) NOT NULL CHECK (type IN ('GLOBAL', 'COURSE_SPECIFIC', 'TARIFF_SPECIFIC')),
                             valid_from TIMESTAMPTZ NOT NULL,
                             valid_until TIMESTAMPTZ NOT NULL,
                             max_uses INTEGER NOT NULL DEFAULT -1,
                             current_uses INTEGER NOT NULL DEFAULT 0,
                             is_active BOOLEAN NOT NULL DEFAULT true,
                             created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                             updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                             CONSTRAINT valid_dates CHECK (valid_until > valid_from)
);

CREATE TABLE promo_code_courses (
                                    promo_code_id UUID NOT NULL REFERENCES promo_codes(id) ON DELETE CASCADE,
                                    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
                                    PRIMARY KEY (promo_code_id, course_id)
);

CREATE TABLE promo_code_tariffs (
                                    promo_code_id UUID NOT NULL REFERENCES promo_codes(id) ON DELETE CASCADE,
                                    tariff_id UUID NOT NULL REFERENCES tariffs(id) ON DELETE CASCADE,
                                    PRIMARY KEY (promo_code_id, tariff_id)
);

CREATE INDEX idx_promo_codes_code ON promo_codes(code);
CREATE INDEX idx_promo_codes_active ON promo_codes(is_active) WHERE is_active = true;
CREATE INDEX idx_promo_codes_valid_dates ON promo_codes(valid_from, valid_until);

COMMENT ON TABLE promo_codes IS 'Promotional discount codes';
COMMENT ON COLUMN promo_codes.discount_percent IS 'Discount percentage (10 = 10%)';