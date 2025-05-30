import { Router } from "express";
import userController from "../controllers/users.js"
import validations from "../middleware/validation.js"
import checkToken from "../middleware/checkToken.js";
const router = Router()
router
    .post("/api/register", validations, userController.REGISTER)
    .post("/api/login", validations, userController.LOGIN)
    .get("/api/users/all",checkToken, userController.getAllUsers)

export default router 