import { Register } from "../db/Register";

export abstract class IRegisterController {
  public static registerToEvent: (register: Register) => void;
}
