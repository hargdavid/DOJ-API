import express from "express";
import { ContentController } from "../controllers/contentController";

export const userPath = "/user";
export const userRoutes = express.Router();

/**
 * @openapi
 * /user:
 *   post:
 *     tags:
 *        - user
 *     description: Create user
 *     responses:
 *       203:
 *         description: Created
 *
 */
userRoutes.post("/", ContentController.getContent);
