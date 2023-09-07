import { collections } from "../db/conn";
import { RegisterDto } from "../model/dto/RegisterDto";

export class RegisterService {
  public static registerToEvent = async (register: RegisterDto) => {
    await collections.registrated?.insertOne(register);
  };
}
