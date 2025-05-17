import pool from "../db";
import logger from "../logger/logger";

export async function getAllEntities<T>(query: string): Promise<T[]> {
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err: any) {
    logger.error("Error in getAllEntities:", err);
    throw err;
  }
}

export async function getById<T>(query: string, id: string): Promise<T | null> {
  try {
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  } catch (err: any) {
    logger.error("Error in getById:", err);
    throw err;
  }
}

export async function updateEntity<T>(
  query: string,
  values: Record<string, any>
): Promise<T> {
  try {
    const result = await pool.query(query, [
      values.name,
      values.description,
      values.cover_image_url,
    ]);
    return result.rows[0];
  } catch (err: any) {
    logger.error("Error in updateEntity:", err);
    throw err;
  }
}

export async function updateByEntityById<T>(
  query: string,
  values: any[]
): Promise<T | null> {
  try {
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err: any) {
    logger.error("Error in updateByEntityById:", err);
    throw err;
  }
}

export async function deleteEntityById(query: string, id: string): Promise<void> {
  try {
    await pool.query(query, [id]);
  } catch (err: any) {
    logger.error("Error in deleteEntityById:", err);
    throw err;
  }
}
