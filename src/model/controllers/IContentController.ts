import { Request } from "express";
import { Planet } from "../db/Planet";

export default abstract class ContentController {
  static getContent: (req: Request, res: Response) => Planet[];
}
