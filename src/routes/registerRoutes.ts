import express from "express";
import { RegisterController } from "../controllers/registerController";

export const registerPath = "/register";
export const registerRoutes = express.Router();

/**
 * @openapi
 * /register:
 *   post:
 *     tags:
 *        - register
 *     requestBody:
 *        description: Register to event
 *        reqiured: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegisterDto'
 *     responses:
 *       203:
 *         description: Created
 *       400:
 *         description: BadRequest
 *
 */
registerRoutes.post("/", RegisterController.registerToEvent);

/**
 * @openapi
 * /register:
 *   get:
 *     tags:
 *        - register
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: BadRequest
 *
 */
registerRoutes.get("/", RegisterController.getRegistered);
