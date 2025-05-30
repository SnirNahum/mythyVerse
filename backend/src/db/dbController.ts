import { Request, Response } from "express";
import {
  delete_entitites_by_id_query,
  get_all_entitites_query,
  get_entity_by_id_query,
} from "./queries/crudQueries";
import { get_table_name_by_url } from "./utils";
import {
  createEntity,
  deleteEntityById,
  getAllEntities,
  getEntityById,
  updateEntityById,
} from "../services/dbService";
import logger from "../logger/logger";
import handleServerError from "../errorHandler/statusCode";

export async function get_all_entities_handler(req: Request, res: Response) {
  const table_name: string = get_table_name_by_url(req.baseUrl);
  try {
    const query: string = get_all_entitites_query(table_name);
    const all_entitites: Object[] = await getAllEntities(query);
    logger.info(`All ${table_name} entities fetched successfully`);
    res.status(200).json(all_entitites);
  } catch (err: any) {
    handleServerError(res, `fetching ${table_name}`, err);
  }
}

export async function get_entity_by_id_handler(
  req: Request,
  res: Response
): Promise<void> {
  const entity_id = req.params.id;
  const table_name = get_table_name_by_url(req.baseUrl);

  try {
    const entity_query = get_entity_by_id_query(table_name, entity_id);
    const entity = await getEntityById(entity_query);
    if (!entity) {
      res
        .status(404)
        .json({ error: `Enitity with ID: ${entity_id} not found` });
      return;
    }

    res.json({
      messsage: `Enitity with ID: ${entity_id} fetched successfully`,
      body: entity,
    });
  } catch (err) {
    handleServerError(res, `fetching ${table_name}`, err);
  }
}

export async function delete_entity_by_id_handler(req: Request, res: Response) {
  const entity_id = req.params.id;
  const table_name = get_table_name_by_url(req.baseUrl);
  try {
    const query: string = delete_entitites_by_id_query(table_name, entity_id);
    await deleteEntityById(query);

    return res.status(200).json({
      message: "Universe deleted successfully",
    });
  } catch (err: any) {
    handleServerError(res, `fetching ${table_name}`, err);
  }
}

export async function create_entity_handler(req: Request, res: Response) {
  const table_name = get_table_name_by_url(req.baseUrl);
  const { body } = req;
  try {
    const new_entity = await createEntity(table_name, body);

    return res.status(201).json({
      message: `${table_name} entity created successfully`,
      new_entity,
    });
  } catch (err: any) {
    handleServerError(res, `fetching ${table_name}`, err);
  }
}

export async function update_entity_by_id_handler(req: Request, res: Response) {
  const entity_id: string = req.params.id;
  const table_name = get_table_name_by_url(req.baseUrl);
  const body = req.body;
  try {
    await updateEntityById(entity_id, table_name, body);
    logger.info("Universe updated successfully");
    res.status(200).json({ message: "Universe updated successfully" });
  } catch (err) {
    handleServerError(res, `fetching ${table_name}`, err);
  }
}
