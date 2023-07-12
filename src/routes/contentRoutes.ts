import express from "express";
import { ContentController } from "../controllers/contentController";

export const contentPath = "/content";
export const contentRoutes = express.Router();

/**
 * @openapi
 * /content:
 *   get:
 *     tags:
 *        - content
 *     description: Planets response
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *            schema:
 *               $ref: '#/components/schemas/Planet'
 *
 */
contentRoutes.get("/", ContentController.getContent);

contentRoutes.get("/about", (req, res) => {
  console.log("About page");
});
