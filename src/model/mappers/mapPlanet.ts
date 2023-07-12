import { Planet } from "../db/Planet";
import { PlanetDto } from "../dto/PlanetDto";

export const mapPlanetToDto = (p: Planet): PlanetDto => ({
  name: p.name,
  orderFromSun: p.orderFromSun,
  hasRings: p.hasRings,
  mainAtmosphere: p.mainAtmosphere,
  surfaceTemperatureC: p.surfaceTemperatureC,
});
