import IContentController from "../model/controllers/IContentController";
import { ContentService } from "../services/contentService";
import { Request, Response } from "express";

export class ContentController implements IContentController {
  static async getContent(req: Request, res: Response) {
    try {
      const response = await ContentService.getContent();
      res.send(response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
