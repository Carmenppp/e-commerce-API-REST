import { Router } from "express";
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";
import { SaleDetailController } from "../controllers/sale_detail.controller.js";
const router = Router();

router.post('/', verifyToken, verifyAdmin, SaleDetailController.add);



router.get('/:id', verifyToken, verifyAdmin, SaleDetailController.findOne);

router.get('/', verifyToken, verifyAdmin, SaleDetailController.getAll)



 
 
router.patch('/:id', verifyToken, verifyAdmin,SaleDetailController.updateItem)

router.delete('/:id', verifyToken, verifyAdmin, SaleDetailController.add);

export default router;