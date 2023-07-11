import { Request } from "express";

export default abstract class ContentController {
  static getContent: (req: Request) => Promise<string>;
}
