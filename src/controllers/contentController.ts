import { Request } from "express";
import IContentController from "../model/controllers/IContentController";
import { ContentService } from "../services/contentService";

export class ContentController implements IContentController {
  static async getContent(req: Request) {
    try {
      const response = await ContentService.getContent();

      return response;
    } catch (err) {
      throw err;
    }
  }
}
