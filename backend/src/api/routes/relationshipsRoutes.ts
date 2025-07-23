import { Router } from "express";
import {
  create_entity_handler,
  delete_entity_by_id_handler,
  get_all_entities_handler,
  get_entity_by_id_handler,
  get_relationships_by_universeId_handler,
  update_entity_by_id_handler,
} from "../../db/dbController";

export const relationshipsRouter: Router = Router();
relationshipsRouter.get("/", get_all_entities_handler);
relationshipsRouter.get("/:id", get_entity_by_id_handler);
relationshipsRouter.get("/universe/:id", get_relationships_by_universeId_handler);
relationshipsRouter.put("/:id", update_entity_by_id_handler);
relationshipsRouter.post("/", create_entity_handler);
relationshipsRouter.delete("/:id", delete_entity_by_id_handler);

export default relationshipsRouter;
