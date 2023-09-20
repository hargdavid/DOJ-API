import { User } from "../model/db/User";
import { IUserService } from "../model/services/IUserService";

export class UserService implements IUserService {
  public static createUser = async (user: User) => {
    /* return await collections.user?.insertOne(user); */
  };
  static getUser() {}
  static updateUser() {}
  static login() {}
  static deleteUser() {}
}
