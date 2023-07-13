import express from "express";
import { ContentController } from "../controllers/contentController";
import { UserController } from "../controllers/userController";

export const userPath = "/user";
export const userRoutes = express.Router();

/**
 * @openapi
 * /user:
 *   post:
 *     tags:
 *        - user
 *     requestBody:
 *        description: Create user
 *        reqiured: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserDto'
 *     responses:
 *       203:
 *         description: Created
 *       400:
 *         description: BadRequest
 *
 */
userRoutes.post("/", UserController.createUser);
