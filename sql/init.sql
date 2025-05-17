-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Universes
CREATE TABLE IF NOT EXISTS universes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  cover_image_url TEXT
);

-- 2. Families
CREATE TABLE IF NOT EXISTS families (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  universe_id UUID REFERENCES universes(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

-- 3. Characters
CREATE TABLE IF NOT EXISTS characters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  universe_id UUID REFERENCES universes(id) ON DELETE CASCADE,
  family_id UUID REFERENCES families(id) ON DELETE SET NULL,
  name VARCHAR(255) NOT NULL,
  bio TEXT,
  dob VARCHAR(100),
  dod VARCHAR(100),
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Relationship Type Enum
DO $$ BEGIN
  CREATE TYPE relationship_type AS ENUM (
    'parent',
    'child',
    'sibling',
    'spouse',
    'mentor',
    'adoptiveParent'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 5. Relationships
CREATE TABLE IF NOT EXISTS relationships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  universe_id UUID REFERENCES universes(id) ON DELETE CASCADE,
  source_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  target_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  relationship_type relationship_type NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
