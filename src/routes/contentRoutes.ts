import express from "express";
import { ContentController } from "../controllers/contentController";

export const routePath = "/content";
export const contentRoutes = express.Router();

/**
 * @openapi
 * /content:
 *   get:
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
