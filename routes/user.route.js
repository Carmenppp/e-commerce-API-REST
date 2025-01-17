import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import { verifyAdmin, verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints para manejar autenticación de usuarios
 */
router.get('/listusers', verifyToken, verifyAdmin, UserController.findAll);
/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', UserController.register);

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso, devuelve un token JWT
 *       401:
 *         description: Credenciales incorrectas
 */
router.post('/login', UserController.login);

router.put('/role-update-seller/:id', verifyToken, verifyAdmin, UserController.updateRoleSeller)

router.get('/profile', verifyToken, UserController.profile)

export default router;
