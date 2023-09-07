import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { IRegisterController } from "../model/controllers/IRegisterController";
import { RegisterDto } from "../model/dto/RegisterDto";
import { RegisterService } from "../services/registerService";

export class RegisterController implements IRegisterController {
  public static registerToEvent = async (req: Request, res: Response) => {
    try {
      const body: RegisterDto = req.body;

      await RegisterService.registerToEvent(body);

      console.log("body", body);

      res.status(203).send("Created");
    } catch (error) {
      res.status(400).send("Bad Request");
    }
  };
}
