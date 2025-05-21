import { Router } from "express";
import {
  create_new_universe_handler,
  delete_universe_by_id_handler,
  get_all_universes_handler,
  get_universe_by_id_handler,
  update_universe_by_id_handler,
} from "../../controllers/universeController";

const universeRouter: Router = Router();

universeRouter.get("/", get_all_universes_handler);
universeRouter.get("/:id", get_universe_by_id_handler);
universeRouter.post("/", create_new_universe_handler);
universeRouter.delete("/:id", delete_universe_by_id_handler);
universeRouter.put("/:id", update_universe_by_id_handler);

export default universeRouter;
