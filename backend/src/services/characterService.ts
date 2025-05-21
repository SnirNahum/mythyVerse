import pool from "../db";
import { GET_ALL_ACTIVE_CHARACTERS } from "../db/queries";
import { getAllEntities } from "./dbService";

export async function get_all_characters() {
  return await getAllEntities(GET_ALL_ACTIVE_CHARACTERS);
}
