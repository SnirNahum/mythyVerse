import { Router } from "express";
import { delete_entity_by_id_handler, get_all_entities_handler, get_entity_by_id_handler } from "../../db/dbController";
import {
  create_user_handler,
  delete_user_handler,
} from "../../controllers/userController";

export const usersRouter: Router = Router();

usersRouter.get("/", get_all_entities_handler);
usersRouter.get("/:id", get_entity_by_id_handler);
usersRouter.delete("/:id", delete_entity_by_id_handler);
usersRouter.post("/register", create_user_handler);
// characterRouter.post("/login", user_login_handler);
