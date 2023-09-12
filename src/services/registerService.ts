import { collections } from "../db/conn";
import { Register } from "../model/db/Register";
import { RegisterDto } from "../model/dto/RegisterDto";

export class RegisterService {
  public static registerToEvent = async (register: RegisterDto) => {
    try {
      const registerDb: Register = {
        name: register.name,
        email: register.email,
        dietPreferences: register.dietPreferences,
        attending: register.attending,
        typeOfDiet: register.typeOfDiet,
      };

      return await collections.registrated?.insertOne(registerDb);
    } catch (error) {
      throw error;
    }
  };
  public static getRegistered = async () => {
    try {
      const response = await collections.registrated?.find({}).toArray();

      return response?.map((register) => ({
        name: register.name,
        email: register.email,
        dietPreferences: register.dietPreferences,
        attending: register.attending,
        typeOfDiet: register.typeOfDiet,
      }));
    } catch (error) {
      throw error;
    }
  };
}
