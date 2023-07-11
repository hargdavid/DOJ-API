import express from "express";
import { ContentController } from "../controllers/contentController";

export const routePath = "/content";
export const contentRoutes = express.Router();

contentRoutes.get("/", async (req, res) => {
  try {
    const response = await ContentController.getContent(req);
    res.send(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
});

contentRoutes.get("/about", (req, res) => {
  console.log("About page");
});
