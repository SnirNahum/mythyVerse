import { Router } from "express";
import {
  create_character_handler,
  delete_character_handler,
  get_all_characters_handler,
  get_character_by_id_handler,
  update_character_handler,
} from "../../controllers/characterController";

const characterRouter: Router = Router();

characterRouter.get("/", get_all_characters_handler);
characterRouter.get("/:id", get_character_by_id_handler);
characterRouter.post("/", create_character_handler);
characterRouter.delete("/:id", delete_character_handler);
characterRouter.put("/:id", update_character_handler);
export default characterRouter;
