export const GET_ALL_ACTIVE_CHARACTERS = "SELECT * FROM characters WHERE status = 0";

export const GET_ACTIVE_CHARACTER_BY_ID =
  "SELECT * FROM characters WHERE id = $1 AND status = 0";

export const GET_ACTIVE_CHARACTER_OUTGOING_RELATIONS = `
  SELECT r.*, c.id as relationship_id, c.name as relationship_name, c.bio as relationship_bio 
  FROM relationships r 
  JOIN characters c ON r.target_id = c.id 
  WHERE r.source_id = $1
  AND r.status = 0
`;

export const GET_ACTIVE_CHARACTER_INCOMING_RELATIONS = `
  SELECT r.*, c.name as source_name 
  FROM relationships r 
  JOIN characters c ON r.source_id = c.id 
  WHERE r.target_id = $1
  AND r.status = 0
`;
