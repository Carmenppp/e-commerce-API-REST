import { Router } from "express";
import { ShippingAddressController } from "../controllers/shipping-address.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get('/', ShippingAddressController.getAll)

export default router;