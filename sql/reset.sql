-- Drop dependent tables first due to FK constraints
DROP TABLE IF EXISTS relationships;
DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS families;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS universes;

-- Drop enum type
DO $$
BEGIN
  DROP TYPE IF EXISTS relationship_type;
EXCEPTION
  WHEN undefined_object THEN null;
END $$;

-- Drop extension if needed (optional)
-- DROP EXTENSION IF EXISTS "uuid-ossp";
