import { Request, Response } from "express";
import { create_user } from "../services/users";
import handleServerError, { handleUserError } from "../errorHandler/statusCode";
import logger from "../logger/logger";
import { get_table_name_by_url } from "../db/utils";
import { deleteEntityById } from "../services/dbService";
import { delete_entitites_by_id_query } from "../db/queries/crudQueries";

export async function create_user_handler(
  req: Request,
  res: Response
): Promise<void> {
  const body: Record<string, any> = req.body;
  try {
    const new_user = await create_user(body);
    logger.info("User created successfully");
    res.status(201).json({ message: "User created successfully", new_user });
  } catch (err) {
    const error_message = handleUserError("Failed to create user", err);
    res.status(500).send({ message: error_message });
  }
}

export async function delete_user_handler(req: Request, res: Response) {
  const entity_id: string = req.params.id;
  const table_name: string = get_table_name_by_url(req.baseUrl);
  try {
    const query: string = delete_entitites_by_id_query(table_name, entity_id);
    await deleteEntityById(query);
    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err: any) {
    handleServerError(res, `fetching ${table_name}`, err);
  }
}
