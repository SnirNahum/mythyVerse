import { Router } from "express";
import {
  create_entity_handler,
  delete_entity_by_id_handler,
  get_all_entities_handler,
  get_entity_by_id_handler,
  update_entity_by_id_handler,
} from "../../db/dbController";

const familiesRouter: Router = Router();
familiesRouter.get("/", get_all_entities_handler);
familiesRouter.get("/:id", get_entity_by_id_handler);
familiesRouter.post("/", create_entity_handler);
familiesRouter.delete("/:id", delete_entity_by_id_handler);
familiesRouter.put("/:id", update_entity_by_id_handler);

export default familiesRouter;
