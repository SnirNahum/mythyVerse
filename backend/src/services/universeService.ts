import {
  DELETE_ACTIVE_UNIVERSE_BY_ID,
  GET_ACTIVE_UNIVERSE_BY_ID,
  GET_ALL_ACTIVE_UNIVERSES,
  UPDATE_UNIVERSE,
} from "../db/queries/universesQueries";
import { UNIVERSES } from "../db/tableNames";
import {
  createEntity,
  deleteEntityById,
  getAllEntities,
  getEntityById,
  updateEntityById,
} from "./dbService";

interface UniverseBody {
  name: string;
  description: string;
  cover_image_url: string;
  status: string;
  created_at: number;
}

export async function get_all_universes() {
  return getAllEntities(GET_ALL_ACTIVE_UNIVERSES);
}
export async function get_universe_by_id(id: string) {
  return getEntityById(GET_ACTIVE_UNIVERSE_BY_ID, id);
}

export async function create_new_universe(body: UniverseBody) {
  return createEntity(UNIVERSES, body);
}

export async function delete_universe_by_id(id: string) {
  const universe = await get_universe_by_id(id);

  if (!universe) {
    throw new Error(`Universe with id: ${id} not found`);
  }

  return deleteEntityById(DELETE_ACTIVE_UNIVERSE_BY_ID, id);
}

export async function update_universe_by_id(id: string, body: UniverseBody) {
  const universe_to_update = await getEntityById(GET_ACTIVE_UNIVERSE_BY_ID, id);
  if (!universe_to_update) {
    throw new Error(`Universe with id: ${id} not found`);
  }
  return updateEntityById(id, UNIVERSES, body);
}
