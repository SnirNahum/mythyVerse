import pool from "../db";
import { GET_ACTIVE_CHARACTER_INCOMING_RELATIONS, GET_ACTIVE_CHARACTER_OUTGOING_RELATIONS } from "../db/queries/characterQueries";

interface Relationship {
  relationship_type: string;
  relationship_id: string;
  relationship_name: string;
  relationship_bio: string;
}
interface Character {
  id: string;
  universe_id: string;
  family_id: string;
  name: string;
  bio: string;
  dob: string;
  dod: string | null;
  image_url: string | null;
  status: number;
  created_at: string;
  updated_at: string;
  outgoingRelations: Relationship[];
  incomingRelations: Relationship[];
}

export async function get_incoming_relationships(characters: Character[]) {
  for (let i = 0; i < characters.length; i++) {
    const incoming_res = await pool.query(
      GET_ACTIVE_CHARACTER_INCOMING_RELATIONS,
      [characters[i].id]
    );
    characters[i].incomingRelations = incoming_res.rows;
  }
  console.log(characters);
  
  return characters;
}

export async function get_outgoing_relationships(characters: Character[]) {
  for (let i = 0; i < characters.length; i++) {
    const outgoing_res = await pool.query(
      GET_ACTIVE_CHARACTER_OUTGOING_RELATIONS,
      [characters[i].id]
    );
    characters[i].outgoingRelations = outgoing_res.rows;
  }
  return characters;
}
