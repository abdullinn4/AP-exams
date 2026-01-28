-- Add snippet field for course catalog cards
ALTER TABLE courses ADD COLUMN snippet VARCHAR(255);

COMMENT ON COLUMN courses.snippet IS 'Short description for course catalog (1-2 sentences)';