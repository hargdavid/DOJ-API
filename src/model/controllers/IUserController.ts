import { User } from "../db/User";

export abstract class IUserController {
  static createUser: (user: User) => void;
}
