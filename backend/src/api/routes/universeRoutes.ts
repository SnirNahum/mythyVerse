import { Router } from "express";
import {
  create_entity_handler,
  delete_entity_by_id_handler,
  get_all_entities_handler,
  get_entity_by_id_handler,
  update_entity_by_id_handler,
} from "../../db/dbController";

const universeRouter: Router = Router();

universeRouter.get("/", get_all_entities_handler);
universeRouter.get("/:id", get_entity_by_id_handler);
universeRouter.post("/", create_entity_handler);
universeRouter.delete("/:id", delete_entity_by_id_handler);
universeRouter.put("/:id", update_entity_by_id_handler);

export default universeRouter;
