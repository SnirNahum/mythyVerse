-- Enable UUID support
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Modify all tables to include a `status` column with default 0
ALTER TABLE universes ADD COLUMN IF NOT EXISTS status INT DEFAULT 0;
ALTER TABLE families ADD COLUMN IF NOT EXISTS status INT DEFAULT 0;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS status INT DEFAULT 0;
ALTER TABLE relationships ADD COLUMN IF NOT EXISTS status INT DEFAULT 0;

-- Insert Universe
WITH new_universe AS (
  INSERT INTO universes (name, description, cover_image_url, status)
  VALUES (
    'Greek Mythology',
    'The ancient Greek pantheon and legends',
    'https://upload.wikimedia.org/greek-myth-cover.jpg',
    0
  )
  RETURNING id
),

-- Insert Families
olympians AS (
  INSERT INTO families (name, description, universe_id, status)
  SELECT 'Olympians', 'The principal deities of the Greek pantheon', id, 0 FROM new_universe
  RETURNING id, universe_id
),
titans AS (
  INSERT INTO families (name, description, universe_id, status)
  SELECT 'Titans', 'The elder gods before the Olympians', id, 0 FROM new_universe
  RETURNING id, universe_id
),

-- Insert Characters
cronus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status)
  SELECT 'Cronus', 'Leader of the Titans', 'Ancient Times', universe_id, id, 0 FROM titans
  RETURNING id, universe_id
),
rhea AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status)
  SELECT 'Rhea', 'Titaness, mother of the Olympians', 'Ancient Times', universe_id, id, 0 FROM titans
  RETURNING id, universe_id
),
zeus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status)
  SELECT 'Zeus', 'King of the gods', 'Unknown', o.universe_id, o.id, 0 FROM olympians o
  RETURNING id, universe_id
)

-- Insert Relationships
INSERT INTO relationships (universe_id, source_id, target_id, relationship_type, description, status)
SELECT
  z.universe_id,
  c.id, z.id, 'parent'::relationship_type, 'Cronus is Zeus''s father', 0
FROM cronus c, zeus z
UNION
SELECT
  z.universe_id,
  r.id, z.id, 'parent'::relationship_type, 'Rhea is Zeus''s mother', 0
FROM rhea r, zeus z;
