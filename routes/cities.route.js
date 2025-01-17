import { Router } from "express";
import { CitiesController } from "../controllers/cities.controller.js";
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get('/', CitiesController.getAll)

export default router;