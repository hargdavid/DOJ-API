import { ObjectId } from "mongoDB";

export interface Register {
  name: string;
  email: string;
  dietPreferences: boolean;
  attending: number;
  typeOfDiet: string;
  id?: ObjectId;
}
