import { Router } from "express";
import { create_family_by_id, delete_family_by_id, get_all_families, get_family_by_id, update_family_by_id } from "../../controllers/familiesController";

const familiesRouter: Router = Router();
familiesRouter.get("/", get_all_families);
familiesRouter.get("/:id", get_family_by_id);
familiesRouter.post("/", create_family_by_id);
familiesRouter.delete("/:id", delete_family_by_id);
familiesRouter.put("/:id", update_family_by_id);

export default familiesRouter;
