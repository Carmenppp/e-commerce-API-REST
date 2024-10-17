import { Router } from "express";
import { AdamsPayController } from "../controllers/adamsPay.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

router.post('/', verifyToken, AdamsPayController.createdDebtContr);


export default router;