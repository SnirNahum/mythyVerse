import { Request, Response } from "express";
import "../services/universeService";
import logger from "../logger/logger";
import {
  create_new_universe,
  delete_universe_by_id,
  get_all_universes,
  get_universe_by_id,
} from "../services/universeService";

export async function get_all_universes_handler(req: Request, res: Response) {
  try {
    const result = await get_all_universes();
    logger.info("Universes fetched successfully");
    res.status(200).json(result);
  } catch (err: any) {
    console.error("Error fetching universes:", err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
}

export async function get_universe_by_id_handler(
  req: Request,
  res: Response
): Promise<void> {
  const entity_id = req.params.id;

  try {
    const entity = await get_universe_by_id(entity_id);

    if (!entity) {
      res
        .status(404)
        .json({ error: `Enitity with ID: ${entity_id} not found` });
      return;
    }

    res.json(entity);
  } catch (err) {
    console.error(`Error fetching entity with ID: ${entity_id}`, err);
    res.status(500).json({ error: `Entity with ID: ${entity_id} not found` });
  }
}

export async function create_new_universe_handler(
  req: Request,
  res: Response
): Promise<Response | any> {
  const { body } = req;
  try {
    const new_universe = await create_new_universe(body);

    return res.status(201).json(new_universe);
  } catch (err: any) {
    logger.error({ err, body }, "Failed to create universe");
    return res.status(500).json({
      error: "Could not create universe",
      message: err.message,
      code: err.code || undefined,
    });
  }
}

export async function delete_universe_by_id_handler(
  req: Request,
  res: Response
) {
  const universe_id = req.params.id;

  try {
    await delete_universe_by_id(universe_id);

    return res.status(200).json({
      message: "Universe deleted successfully",
    });
  } catch (err: any) {
    const status = err.status || 500;
    const message = err.message || "Server error";

    return res.status(status).json({
      error: message,
    });
  }
}
