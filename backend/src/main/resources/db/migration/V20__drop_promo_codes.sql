-- Drop promo codes table as all promo codes are now managed in LemonSqueezy
DROP TABLE IF EXISTS promo_codes CASCADE;

COMMENT ON SCHEMA public IS 'Promo codes moved to LemonSqueezy';