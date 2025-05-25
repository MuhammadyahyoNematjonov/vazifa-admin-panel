import { Router } from "express";
import branchController from "../controllers/brench.js";
import validation from "../middleware/validation.js";
import checkToken from "../middleware/checkToken.js";
import permishin from "../middleware/permishin.js";

const router = Router();

router.post("/api/v1/branch/create", checkToken, validation,permishin, branchController.create);

export default router;
