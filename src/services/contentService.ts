import IContentService from "../model/services/IContentService";
import { mapPlanetToDto } from "../model/mappers/mapPlanet";

export class ContentService implements IContentService {
  static async getContent() {
    // const planets = await collections.user?.find({}).toArray();
    //return planets?.map(mapPlanetToDto);
  }
}
