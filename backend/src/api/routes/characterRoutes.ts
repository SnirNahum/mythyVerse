import { Router } from "express";
import {
  create_entity_handler,
  delete_entity_by_id_handler,
  get_all_characters_by_universe_id,
  get_all_entities_handler,
  get_entity_by_id_handler,
  update_entity_by_id_handler,
} from "../../db/dbController";

const characterRouter: Router = Router();

characterRouter.get("/", get_all_entities_handler);
characterRouter.get("/:id", get_entity_by_id_handler);
characterRouter.post("/", create_entity_handler);
characterRouter.post("/:id", get_all_characters_by_universe_id);
characterRouter.delete("/:id", delete_entity_by_id_handler);
characterRouter.put("/:id", update_entity_by_id_handler);
export default characterRouter;
