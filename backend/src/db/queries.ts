export const GET_ALL_ACTIVE_CHARACTERS: string  = 'SELECT * FROM characters WHERE status = 0'
export const GET_ACTIVE_CHARACTER_BY_ID: string = 'SELECT * FROM characters WHERE id = $1 AND status = 0';
export const DELETE_ACTIVE_CHARACTER_BY_ID: string = 'UPDATE characters SET status = 9 WHERE id = $1';

export const GET_ACTIVE_CHARACTER_OUTGOING_RELATION: string = `SELECT r.relationship_type, c.id, c.name, c.bio
         FROM relationships r
         JOIN characters c ON r.target_id = c.id
         WHERE r.source_id = $1`

export const GET_ACTIVE_CHARACTER_INCOMING_RELATION: string =`SELECT r.relationship_type, c.id, c.name, c.bio
        FROM relationships r
        JOIN characters c ON r.source_id = c.id
        WHERE r.target_id = $1`
