import { Request, Response } from "express";
import { IUserController } from "../model/controllers/IUserController";
import { CreateUserDto } from "../model/dto/UserDto";
import { validateCreateUser } from "../helpers/validations/validateUser";

export class UserController implements IUserController {
  static createUser(req: Request, res: Response) {
    const body: CreateUserDto = req.body;

    const { user, password } = validateCreateUser(body);

    console.log("body", body);

    res.status(203).send("Created");
  }
}
