import pool from "../db";
import { create_entity_query } from "../db/queries/crudQueries";
import {
  prepare_placeholders_and_keys,
  prepare_update_body,
} from "../db/utils";
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

export async function getEntityById<T>(query: string): Promise<T | null> {
  try {
    const result = await pool.query(query);
    return result.rows[0] || null;
  } catch (err: any) {
    logger.error("Error in getEntityById:", err);
    throw err;
  }
}

export async function createEntity<T>(
  tableName: string,
  values: Record<string, any>
) {
  const fields: { keys: string[]; placeholders: string[] } =
    prepare_placeholders_and_keys(values);
  const query = create_entity_query(
    tableName,
    fields.keys,
    fields.placeholders
  );
  const orderedValues = fields.keys.map((key) => values[key]);

  try {
    const result = await pool.query(query, orderedValues);
    debugger;
    return result.rows[0];
  } catch (err: any) {
    logger.error("Error in createEntity:", err);
    throw err;
  }
}

export async function deleteEntityById(query: string): Promise<void> {
  try {
    await pool.query(query);
  } catch (err: any) {
    logger.error("Error in deleteEntityById:", err);
    throw err;
  }
}

export async function updateEntityById<T>(
  entity_id: string,
  table_name: string,
  values: Record<string, any>
): Promise<T | null> {
  try {
    const fields: { keys: string[]; placeholders: string[] } =
      prepare_placeholders_and_keys(values);
    const query = prepare_update_body(table_name, entity_id, fields.keys);
    const orderedValues = fields.keys.map((key) => values[key]);
    const result = await pool.query(query, orderedValues);
    return result.rows[0] || null;
  } catch (err: any) {
    logger.error("Error in updateEntityById:", err);
    throw err;
  }
}
