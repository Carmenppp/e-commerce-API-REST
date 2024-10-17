import { Router } from "express";
import { BrandsController } from "../controllers/brands.controller.js"; 
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Brands
 *   description: Endpoints para manejar marcas
 */

/**
 * @swagger
 * /api/v1/brands:
 *   post:
 *     summary: Añadir una nueva marca
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     responses:
 *       201:
 *         description: Marca añadida correctamente
 *       400:
 *         description: Error en la solicitud
 */

router.post('/', verifyToken, BrandsController.add);

/**
 * @swagger
 * /api/v1/brands:
 *   get:
 *     summary: Obtener todas las marcas
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de marcas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brand'
 */
router.get('/', verifyToken, BrandsController.getAll)

/**
 * @swagger
 * /api/v1/brands/{id}:
 *   get:
 *     summary: Obtener una marca por ID
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la marca
 *     responses:
 *       200:
 *         description: Marca encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       404:
 *         description: Categoria no encontrada
 */
router.get('/:id', verifyToken, BrandsController.findOne)
/**
 * @swagger
 * /api/v1/brands/{id}:
 *   patch:
 *     summary: Actualizar una marca por ID
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la marca
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     responses:
 *       200:
 *         description: Marca actualizada correctamente
 *       404:
 *         description: Marca no encontrada
 */
router.patch('/:id', verifyToken, BrandsController.updateItem)
/**
 * @swagger
 * /api/v1/brands/{id}:
 *   delete:
 *     summary: Eliminar una marca por ID
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la marca
 *     responses:
 *       200:
 *         description: Marca eliminada correctamente
 *       404:
 *         description: Marca no encontrada
 */
router.delete('/:id', verifyToken, BrandsController.remove)

export default router;