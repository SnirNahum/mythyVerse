import { Request, Response } from "express";
import logger from "../logger/logger";
import {
  createEntity,
  deleteEntityById,
  getAllEntities,
  getEntityById,
  updateEntityById,
} from "../services/dbService";
import handleServerError from "../errorHandler/statusCode";
import { FAMILIES } from "../db/tableNames";
import {
  DELETE_ACTIVE_FAMILY_BY_ID,
  GET_ACTIVE_FAMILY_BY_ID,
  GET_ALL_ACTIVE_FAMILILES,
  UPDATE_ACTIVE_FAMILY_BY_ID,
} from "../db/queries/familiesQueries";

export async function get_all_families(req: Request, res: Response) {
  try {
    const all_families = await getAllEntities(GET_ALL_ACTIVE_FAMILILES);
    logger.info("All families fetched successfully");
    res.status(200).json({
      message: `All families fetched successfully`,
      body: all_families,
    });
  } catch (err) {
    handleServerError(res, "Cannot get all families", err);
  }
}

export async function get_family_by_id(req: Request, res: Response) {
  const family_id: string = req.params.id;
  try {
    const family = await getEntityById(GET_ACTIVE_FAMILY_BY_ID, family_id);
    logger.info(`Family with ID: ${family_id} fetched successfully`);
    res.status(200).json({
      message: `Family with ID: ${family_id} fetched successfully`,
      body: family,
    });
  } catch (err) {
    handleServerError(res, `Cannot retrieve family with ID: ${family_id}`, err);
  }
}

export async function create_family_by_id(req: Request, res: Response) {
  const family_body = req.body;
  try {
    const created_family = await createEntity(FAMILIES, family_body);
    logger.info("Family created successfully");
    res
      .status(201)
      .json({ message: "Family created successfully", created_family });
  } catch (err) {
    handleServerError(res, `Cannot create family`, err);
  }
}

export async function delete_family_by_id(req: Request, res: Response) {
  const family_id = req.params.id;
  try {
    await deleteEntityById(DELETE_ACTIVE_FAMILY_BY_ID, family_id);
    logger.info(`Family with ID: ${family_id} deleted sucessfully`);
    res
      .status(200)
      .json({ message: `Family with ID: ${family_id} deleted sucessfully` });
  } catch (err) {
    handleServerError(res, `Cannot delete family with ID: ${family_id}`, err);
  }
}

export async function update_family_by_id(req: Request, res: Response) {
  const family_body = req.body;
  const family_id = req.params.id;
  try {
    const is_family_exist = await getEntityById(
      GET_ACTIVE_FAMILY_BY_ID,
      family_id
    );
    if (!is_family_exist) {
      throw new Error(`Universe with id: ${family_id} not found`);
    }
    const updated_family = await updateEntityById(
      family_id,
      FAMILIES,
      family_body
    );
    logger.info(`Family with ID: ${family_id} updated successfully`);
    res.status(200).json({
      message: `Family with ID: ${family_id} updated successfully`,
      body: updated_family,
    });
  } catch (err) {
    handleServerError(res, `Cannot update family with ID: ${family_id}`, err);
  }
}
