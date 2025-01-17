import { Router } from "express";
import { InvoiceController } from "../controllers/invoice.controller.js";
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";

const router = Router();

router.post('/:orderId/:invoiceId', verifyToken, verifyAdmin, InvoiceController.add);

/**
 * @swagger
 * /api/v1/cart:
 *   get:
 *     summary: Obtener todas las carrito
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de carritos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 */
router.get('/', verifyToken, verifyAdmin, InvoiceController.getAll)

/**
 * @swagger
 * /api/v1/cart/{id}:
 *   get:
 *     summary: Obtener una Carrito por ID
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoria
 *     responses:
 *       200:
 *         description: Carrito encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Carrito no encontrado
 */
 router.get('/:id', verifyToken, verifyAdmin, InvoiceController.findOne)
/**
 * @swagger
 * /api/v1/cart/{id}:
 *   patch:
 *     summary: Actualizar un carrito por ID
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: Carrito actualizada correctamente
 *       404:
 *         description: Carrito no encontrado
 */
router.patch('/:orderId/:invoiceId', verifyToken, verifyAdmin, InvoiceController.updateItem)


router.delete('/:orderId/:invoiceId', verifyToken, verifyAdmin, InvoiceController.remove)

export default router;