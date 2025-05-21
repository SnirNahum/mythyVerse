export const GET_ALL_ACTIVE_UNIVERSES: string =
  "SELECT * FROM universes WHERE status = 0";
export const GET_ACTIVE_UNIVERSE_BY_ID: string =
  "SELECT id, name, description, cover_image_url, status FROM universes where id = $1 AND status = 0";
export const DELETE_ACTIVE_UNIVERSE_BY_ID: string =
  "UPDATE universes SET status = 9 WHERE id = $1";
export const CREATE_UNIVERSE =
  "INSERT INTO universes (name, description, cover_image_url,status,created_at,updated_at) VALUES ($1, $2, $3,0, $4,  $5 RETURNING id, name, description, cover_image_url";
export const UPDATE_UNIVERSE =
  "UPDATE universes SET name = $2, description = $3, cover_image_url = $4, status = $5, created_at = $6, updated_at = $7 WHERE id = $1";
