-- Add order_index column to courses table for controlling display order
ALTER TABLE courses ADD COLUMN order_index INTEGER;

-- Create index for better query performance
CREATE INDEX idx_courses_order_index ON courses(order_index);
