import { Router } from "express";
import { CategoriesController } from "../controllers/categories.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Endpoints para manejar categorias
 */

/**
 * @swagger
 * /api/v1/categories:
 *   post:
 *     summary: Añadir una nueva categoria
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Categoria añadida correctamente
 *       400:
 *         description: Error en la solicitud
 */

router.post('/', verifyToken, CategoriesController.add);

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Obtener todas las categorias
 *     tags: [Categories]
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
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/', verifyToken, CategoriesController.getAll)

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Obtener una categoria por ID
 *     tags: [Categories]
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
 *         description: Categoria encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Categoria no encontrada
 */
router.get('/:id', verifyToken, CategoriesController.findOne)
/**
 * @swagger
 * /categories/{id}:
 *   patch:
 *     summary: Actualizar una categoria por ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoria actualizada correctamente
 *       404:
 *         description: Categoria no encontrada
 */
router.patch('/:id', verifyToken, CategoriesController.updateItem)
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Eliminar una categoria por ID
 *     tags: [Categories]
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
 *         description: Categoria eliminada correctamente
 *       404:
 *         description: Categoria no encontrada
 */
router.delete('/:id', verifyToken, CategoriesController.remove)

export default router;