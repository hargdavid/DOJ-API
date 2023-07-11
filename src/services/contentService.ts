import IContentService from "../model/services/IContentService";
import { collections } from "../db/conn";

export class ContentService implements IContentService {
  static async getContent() {
    const planets = await collections.planets?.find({}).toArray();
    console.log("planets", planets);
    return planets;
  }
}
