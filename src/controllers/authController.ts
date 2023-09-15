import IContentController from "../model/controllers/IContentController";
import { Request, Response } from "express";
import { LoginFormDto } from "../model/dto/LoginFormDto";

export class AuthController implements IContentController {
  static async loginUser(req: Request, res: Response) {
    const loginForm: LoginFormDto = req.body;

    if (
      (loginForm.name === "Brölli",
      loginForm.password === "Super_säkert_lösenord")
    ) {
      res.status(200).send("Success");
    } else {
      res.status(401);
    }
  }
}
