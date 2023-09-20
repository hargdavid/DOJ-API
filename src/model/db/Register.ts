import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export interface Register {
  name: string;
  email: string;
  dietPreferences: boolean;
  attending: number;
  typeOfDiet: string;
  id?: ObjectId;
}

const RegisterSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    dietPreferences: Boolean,
    attending: Number,
    typeOfDiet: String,
  },
  { collection: "registrated" }
);

export const RegisterModel = mongoose.model("registrated", RegisterSchema);
