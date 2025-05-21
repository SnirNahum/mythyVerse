import { Request, Response } from "express";
import handleServerError from "../errorHandler/statusCode";
import { characterBody } from "../Interface/charactersTable";
import logger from "../logger/logger";
import { get_all_characters } from "../services/characterService";
import {
  createEntity,
  deleteEntityById,
  getEntityById,
  updateEntityById,
} from "../services/dbService";
import { CHARACTERS } from "../db/tableNames";
import {
  DELETE_ACTIVE_CHARACTER_BY_ID,
  GET_ACTIVE_CHARACTER_BY_ID,
} from "../db/queries";

export async function get_all_characters_handler(req: Request, res: Response) {
  try {
    const all_characters = await get_all_characters();
    logger.info("All characters fetched successfully");
    res
      .status(200)
      .json({ message: "All characters fetched successfully", all_characters });
  } catch (err: any) {
    handleServerError(res, "Failed to get all characters", err);
  }
}

export async function create_character_handler(req: any, res: any) {
  try {
    const character_body: characterBody = req.body;
    const result = await createEntity(CHARACTERS, character_body);
    logger.info("Character created successfully");
    res
      .status(201)
      .json({ message: "Character created successfully", body: result });
  } catch (err) {
    handleServerError(res, "Failed to create character", err);
  }
}

export async function get_character_by_id_handler(req: Request, res: Response) {
  const character_id: string = req.params.id;
  try {
    const character = await getEntityById(
      GET_ACTIVE_CHARACTER_BY_ID,
      character_id
    );
    logger.info(`Character with ID: ${character_id} fetched successfully`);
    res.status(200).json({
      message: `Character with ID: ${character_id} fetched successfully`,
      body: character,
    });
  } catch (err) {
    logger.error(`Character with ID: ${character_id} not found`);
    handleServerError(res, `Error fetching character`, err);
  }
}

export async function delete_character_handler(req: Request, res: Response) {
  const character_id = req.params.id;
  try {
    const deleted_character = await deleteEntityById(
      DELETE_ACTIVE_CHARACTER_BY_ID,
      character_id
    );
    logger.info(`Character with ID: ${deleted_character} deleted successfully`);
    res.status(200).json({ message: "Character deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete character", err);
    handleServerError(res, "Failed to delete character", err);
  }
}

export async function update_character_handler(req: Request, res: Response) {
  const character_id = req.params.id;
  const character_body = req.body;
  try {
    const updated_character = updateEntityById(
      character_id,
      CHARACTERS,
      character_body
    );
    logger.info(`Character with ID: ${character_id} updated successfully`);
    res.status(200).json({
      message: `Character with ID: ${character_id} updated successfully`,
    });
  } catch (err) {
    logger.info(`Failed to update character with ID: ${character_id}`, err);
    handleServerError(
      res,
      `Failed to update character with ID: ${character_id}`,
      err
    );
  }
}
