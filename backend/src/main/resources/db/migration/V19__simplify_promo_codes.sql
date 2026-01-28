-- Drop junction tables for course and tariff specific promo codes
DROP TABLE IF EXISTS promo_code_courses;
DROP TABLE IF EXISTS promo_code_tariffs;

-- Remove the type column as all promo codes will now be global
ALTER TABLE promo_codes DROP COLUMN IF EXISTS type;

-- Add comment to reflect the change
COMMENT ON TABLE promo_codes IS 'Promotional discount codes - applies globally to all courses and tariffs';