import { Request, Response } from "express";
import { IUserController } from "../model/controllers/IUserController";
import { CreateUserDto } from "../model/dto/UserDto";
import { validateCreateUser } from "../helpers/validations/validateUser";
import { UserService } from "../services/userService";

export class UserController implements IUserController {
  public static createUser = async (req: Request, res: Response) => {
    try {
      const body: CreateUserDto = req.body;

      const { user, password } = validateCreateUser(body);

      await UserService.createUser(user);

      console.log("body", body);

      res.status(203).send("Created");
    } catch (error) {
      res.status(400).send("Bad Request");
    }
  };
}
