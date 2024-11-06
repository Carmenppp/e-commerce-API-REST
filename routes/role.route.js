import { Router } from "express";
import { RoleController } from "../controllers/role.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get('/', RoleController.getAll)

export default router;