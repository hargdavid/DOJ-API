import { ObjectId } from "mongoDB";

export interface User {
  firstName: string;
  surName: string;
  userId?: number;
  email: string;
  role: number;
  id?: ObjectId;
}
