import { ObjectId } from "mongoose";

export interface Planet {
  name: string;
  id?: ObjectId;
  orderFromSun: number;
  hasRings: boolean;
  mainAtmosphere: string[];
  surfaceTemperatureC: Temperature;
}

interface Temperature {
  min: string | null;
  max: string | null;
  mean: string | number | null;
}
