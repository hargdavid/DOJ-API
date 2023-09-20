import { ObjectId } from "mongodb";

export interface Planet {
  name: string;
  id?: ObjectId;
  orderFromSun: number;
  hasRings: boolean;
  mainAtmosphere: string[];
  surfaceTemperatureC: Temperature;
}

interface Temperature {
  min: number | null;
  max: number | null;
  mean: number | null;
}
