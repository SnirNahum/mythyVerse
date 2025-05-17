// import { error } from "console";
// import pool from "../db";
// import {
//   CREATE_UNIVERSE,
//   DELETE_ACTIVE_UNIVERSE_BY_ID,
//   GET_ACTIVE_UNIVERSE_BY_ID,
// } from "../db/queries/universesQueries";
// import logger from "../logger/logger";

// export async function get_all_universes<T>(query: string) {
//   return (await pool.query(query)).rows;
// }

// export async function get_universe_by_id<T>(
//   query: string,
//   entityId: string
// ): Promise<T | null> {
//   const entity = await pool.query(query, [entityId]);
//   return entity.rows[0] || null;
// }
// interface UniverseBody {
//   name: string;
//   description: string;
//   cover_image_url: string;
//   status: string;
// }

// export async function create_new_universe(query: string, body: UniverseBody) {
//   try {
//     const created_universe = await pool.query(query, [
//       body.name,
//       body.description,
//       body.cover_image_url,
//       body.status,
//     ]);
//     logger.info(
//       `Universe with ID: ${created_universe.rows[0].id} created successfully!`
//     );
//     return created_universe.rows[0] || null;
//   } catch (err: any) {
//     logger.error("Error creating universe:", err);
//     return {
//       error: true,
//       message: err.message,
//       code: err.code,
//     };
//   }
// }
// interface Universe {
//   id: string;
//   name: string;
//   description: string;
//   cover_image_url: string;
// }
// export async function delete_universe_by_id(
//   query: string,
//   universe_id: string
// ): Promise<void> {
//   const universe_exist: Universe | null = await get_universe_by_id(
//     GET_ACTIVE_UNIVERSE_BY_ID,
//     universe_id
//   );

//   if (!universe_exist) {
//     const err = new Error("Universe not found");
//     (err as any).status = 404;
//     throw err;
//   }

//   const deleted_universe = await pool.query(query, [universe_id]);
// }

import * as dbService from "./dbService";
import {
  CREATE_UNIVERSE,
  DELETE_ACTIVE_UNIVERSE_BY_ID,
  GET_ACTIVE_UNIVERSE_BY_ID,
  GET_ALL_ACTIVE_UNIVERSES,
  UPDATE_UNIVERSE,
} from "../db/queries/universesQueries";
import { UNIVERSES } from "../db/tableNames";

interface UniverseBody {
  name: string;
  description: string;
  cover_image_url: string;
  status: string;
}

export async function get_all_universes() {
  return dbService.getAllEntities(GET_ALL_ACTIVE_UNIVERSES);
}
export async function get_universe_by_id(id:string){
  return dbService.getById(GET_ACTIVE_UNIVERSE_BY_ID, id);
}

export async function create_new_universe(body: UniverseBody) {
  return dbService.updateEntity(CREATE_UNIVERSE, body);
}

export async function delete_universe_by_id(id: string) {
  const universe = await get_universe_by_id(id);
  if (!universe) {
    const err = new Error("Universe not found");
    (err as any).status = 404;
    throw err;
  }
  return dbService.deleteEntityById(DELETE_ACTIVE_UNIVERSE_BY_ID, id);
}
