import { Router } from "express";
import { SuppliersController } from "../controllers/suppliers.controller.js";
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: Endpoints para manejar categorias
 */

/**
 * @swagger
 * /api/v1/suppliers:
 *   post:
 *     summary: Añadir una nueva categoria
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Suppliers'
 *     responses:
 *       201:
 *         description: Proveedor añadido correctamente
 *       400:
 *         description: Error en la solicitud
 */

router.post('/', verifyToken, verifyAdmin, SuppliersController.add);

/**
 * @swagger
 * /api/v1/suppliers:
 *   get:
 *     summary: Obtener todas las categorias
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Suppliers'
 */
router.get('/', verifyToken, verifyAdmin, SuppliersController.getAll)

/**
 * @swagger
 * /api/v1/suppliers/{id}:
 *   get:
 *     summary: Obtener una proveedor por ID
 *     tags: [Suppliers]
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
 *         description: Proveedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Suppliers'
 *       404:
 *         description: Proveedor no encontrado
 */
router.get('/:id', verifyToken, verifyAdmin, SuppliersController.findOne)
/**
 * @swagger
 * /api/v1/suppliers/{id}:
 *   patch:
 *     summary: Actualizar un proveedor por ID
 *     tags: [Suppliers]
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
 *             $ref: '#/components/schemas/Suppliers'
 *     responses:
 *       200:
 *         description: Proveedor actualizada correctamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.patch('/:id', verifyToken, verifyAdmin, SuppliersController.updateItem)
/**
 * @swagger
 * /api/v1/suppliers/{id}:
 *   delete:
 *     summary: Eliminar un proveedor por ID
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la proveedor
 *     responses:
 *       200:
 *         description: Proveedor eliminado correctamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.delete('/:id', verifyToken, verifyAdmin, SuppliersController.remove)

export default router;