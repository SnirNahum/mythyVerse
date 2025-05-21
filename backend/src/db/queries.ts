// characters
// export const GET_ALL_ACTIVE_CHARACTERS: string = `SELECT 
//               characters.id,
//               characters.name,
//               characters.bio,
//               characters.dob,
//               characters.dod,
//               characters.image_url,
//               characters.created_at,
//               characters.updated_at,
//               families.name AS family_name,
//               universes.name AS universe_name
//             FROM characters
//             LEFT JOIN families ON characters.family_id = families.id
//             LEFT JOIN universes ON characters.universe_id = universes.id`

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


        
