-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable relationship_type enum if not exists
DO $$ BEGIN
  CREATE TYPE relationship_type AS ENUM (
    'parent',
    'child',
    'sibling',
    'spouse',
    'mentor',
    'adoptiveParent',
    'step-parent'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 1. Insert Universe and Families and Characters
WITH new_universe AS (
  INSERT INTO universes (name, description, cover_image_url, status, created_at, updated_at)
  VALUES (
    'Greek Mythology',
    'The ancient Greek pantheon and legends',
    'https://upload.wikimedia.org/greek-myth-cover.jpg',
    0,
    (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT,
    (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  )
  RETURNING id
),

olympians AS (
  INSERT INTO families (name, description, universe_id, status, created_at, updated_at)
  SELECT 'Olympians', 'The principal deities of the Greek pantheon', id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM new_universe
  RETURNING id, universe_id
),

titans AS (
  INSERT INTO families (name, description, universe_id, status, created_at, updated_at)
  SELECT 'Titans', 'The elder gods before the Olympians', id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM new_universe
  RETURNING id, universe_id
),

demigods AS (
  INSERT INTO families (name, description, universe_id, status, created_at, updated_at)
  SELECT 'Demigods', 'Offspring of gods and mortals', id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM new_universe
  RETURNING id, universe_id
),

-- Insert Characters

cronus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Cronus', 'Leader of the Titans', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM titans
  RETURNING id
),

rhea AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Rhea', 'Titaness, mother of the Olympians', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM titans
  RETURNING id
),

oceanus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Oceanus', 'Titan god of the ocean', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM titans
  RETURNING id
),

zeus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Zeus', 'King of the gods', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

hera AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Hera', 'Queen of the gods and goddess of marriage', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

poseidon AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Poseidon', 'God of the sea', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

hades AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Hades', 'God of the underworld', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

demeter AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Demeter', 'Goddess of the harvest', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

hestia AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Hestia', 'Goddess of the hearth and home', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

ares AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Ares', 'God of war', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

athena AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Athena', 'Goddess of wisdom and warfare', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

apollo AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Apollo', 'God of the sun, music, and prophecy', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

artemis AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Artemis', 'Goddess of the hunt and the moon', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

aphrodite AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Aphrodite', 'Goddess of love and beauty', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

hephaestus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Hephaestus', 'God of fire and forge', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

hermes AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Hermes', 'Messenger god, god of trade and thieves', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

dionysus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Dionysus', 'God of wine, festivity, and theater', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM olympians
  RETURNING id
),

persephone AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Persephone', 'Goddess of spring and queen of the underworld', 'Unknown', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM demigods
  RETURNING id
),

heracles AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Heracles', 'Divine hero known for his strength and the Twelve Labors', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM demigods
  RETURNING id
),

alcmene AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Alcmene', 'Mortal mother of Heracles', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM demigods
  RETURNING id
),

amphitryon AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Amphitryon', 'Husband of Alcmene, stepfather of Heracles', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM demigods
  RETURNING id
),

theseus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Theseus', 'Founder-hero of Athens', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM demigods
  RETURNING id
),

perseus AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Perseus', 'Slayer of Medusa and founder of Mycenae', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM demigods
  RETURNING id
),

medusa AS (
  INSERT INTO characters (name, bio, dob, universe_id, family_id, status, created_at, updated_at)
  SELECT 'Medusa', 'Gorgon with snakes for hair', 'Ancient Times', universe_id, id, 0,
         (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT
  FROM demigods
  RETURNING id
)

-- 2. Insert Relationships
INSERT INTO relationships (universe_id, source_id, target_id, relationship_type, description, status, created_at, updated_at)
VALUES
  -- Cronus and Rhea are parents of Zeus and Hera
  ((SELECT id FROM new_universe), (SELECT id FROM cronus), (SELECT id FROM zeus), 'parent', 'Cronus is father of Zeus', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),
  ((SELECT id FROM new_universe), (SELECT id FROM rhea), (SELECT id FROM zeus), 'parent', 'Rhea is mother of Zeus', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),
  ((SELECT id FROM new_universe), (SELECT id FROM cronus), (SELECT id FROM hera), 'parent', 'Cronus is father of Hera', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),
  ((SELECT id FROM new_universe), (SELECT id FROM rhea), (SELECT id FROM hera), 'parent', 'Rhea is mother of Hera', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  -- Zeus family relationships
  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM hera), 'spouse', 'Zeus is married to Hera', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM persephone), 'parent', 'Zeus is father of Persephone', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM ares), 'parent', 'Zeus is father of Ares', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM apollo), 'parent', 'Zeus is father of Apollo', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM artemis), 'parent', 'Zeus is father of Artemis', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM hephaestus), 'parent', 'Zeus is father of Hephaestus', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM hermes), 'parent', 'Zeus is father of Hermes', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM dionysus), 'parent', 'Zeus is father of Dionysus', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  -- Demeter is mother of Persephone
  ((SELECT id FROM new_universe), (SELECT id FROM demeter), (SELECT id FROM persephone), 'parent', 'Demeter is mother of Persephone', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  -- Hades and Persephone spouse
  ((SELECT id FROM new_universe), (SELECT id FROM hades), (SELECT id FROM persephone), 'spouse', 'Hades is spouse of Persephone', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  -- Heracles family
  ((SELECT id FROM new_universe), (SELECT id FROM zeus), (SELECT id FROM heracles), 'parent', 'Zeus is father of Heracles', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),
  ((SELECT id FROM new_universe), (SELECT id FROM alcmene), (SELECT id FROM heracles), 'parent', 'Alcmene is mother of Heracles', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),
  ((SELECT id FROM new_universe), (SELECT id FROM amphitryon), (SELECT id FROM heracles), 'adoptiveParent', 'Amphitryon is stepfather of Heracles', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  -- Perseus and Medusa
  ((SELECT id FROM new_universe), (SELECT id FROM perseus), (SELECT id FROM medusa), 'adoptiveParent', 'Perseus killed Medusa', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  -- Theseus mentor of Heracles
  ((SELECT id FROM new_universe), (SELECT id FROM theseus), (SELECT id FROM heracles), 'mentor', 'Theseus mentored Heracles', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT),

  -- Aphrodite and Ares spouse/consort
  ((SELECT id FROM new_universe), (SELECT id FROM aphrodite), (SELECT id FROM ares), 'spouse', 'Aphrodite is consort of Ares', 0, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT, (EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT)
;
