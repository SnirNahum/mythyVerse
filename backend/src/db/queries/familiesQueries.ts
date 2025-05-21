// families
export const GET_ALL_ACTIVE_FAMILILES: string = "SELECT * FROM families WHERE status = 0";
export const GET_ACTIVE_FAMILY_BY_ID: string = `SELECT * FROM families WHERE id = $1 AND status = 0`;
export const DELETE_ACTIVE_FAMILY_BY_ID: string = `UPDATE families SET status = 9 WHERE id = $1`;
export const UPDATE_ACTIVE_FAMILY_BY_ID: string = `UPDATE families SET status = 9 WHERE id = $1`;
