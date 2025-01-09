import { Router } from "express";
import { InventoryController } from "../controllers/inventory.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Endpoints para manejar carritos
 */

/**
 * @swagger
 * /api/v1/cart:
 *   post:
 *     summary: Añadir una nueva carritos
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       201:
 *         description: Carrito añadido correctamente
 *       400:
 *         description: Error en la solicitud
 */

router.post('/', verifyToken, InventoryController.add);

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
router.get('/', verifyToken, InventoryController.getAll)

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
 router.get('/:id', InventoryController.findOne)
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
router.patch('/:id', verifyToken, InventoryController.updateItem)
/**
 * @swagger
 * /api/v1/cart/{id}:
 *   delete:
 *     summary: Eliminar un carrito por ID
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del carrito
 *     responses:
 *       200:
 *         description: Carrito eliminado correctamente
 *       404:
 *         description: Carrito no encontrado
 */
router.delete('/:id', verifyToken, InventoryController.remove)

export default router;