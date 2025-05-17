import pool from "../db";
import {
  GET_ACTIVE_CHARACTER_BY_ID,
  GET_ACTIVE_CHARACTER_INCOMING_RELATION,
  GET_ACTIVE_CHARACTER_OUTGOING_RELATION,
} from "../db/queries/characterQueries";

export async function getCharacterById(characterId: string): Promise<object> {
  const result = await pool.query(GET_ACTIVE_CHARACTER_BY_ID, [characterId]);
  return result.rows[0] || null;
}

export async function getCharacterRelations(id: string): Promise<object> {
  const outgoing = await pool.query(GET_ACTIVE_CHARACTER_OUTGOING_RELATION, [id]);
  const incoming = await pool.query(GET_ACTIVE_CHARACTER_INCOMING_RELATION, [id]);

  return {
    outgoing: outgoing.rows,
    incoming: incoming.rows,
  };
}
