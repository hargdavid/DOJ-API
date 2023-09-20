import { ObjectId } from "mongodb";

export interface User {
  firstName: string;
  surName: string;
  userId?: number;
  email: string;
  role: number;
  id?: ObjectId;
}
