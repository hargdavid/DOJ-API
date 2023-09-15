import express from "express";
import { AuthController } from "../controllers/authController";

export const authPath = "/auth";
export const authRoutes = express.Router();

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *        - auth
 *     requestBody:
 *        description: Login user
 *        reqiured: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginFormDto'
 *     responses:
 *       203:
 *         description: Success
 *       400:
 *         description: BadRequest
 *
 */
authRoutes.post("/login", AuthController.loginUser);
