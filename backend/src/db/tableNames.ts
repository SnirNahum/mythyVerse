export const FAMILIES = "families";
export const CHARACTERS = "characters";
export const UNIVERSES = "universes";
export const GET_EMPTY_TABLE = `
    SELECT column_name
    FROM information_schema.columns
    WHERE table_name = $1
    AND column_name != 'id'
    AND column_name != 'status'
    ORDER BY ordinal_position
    `;
