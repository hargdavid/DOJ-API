import { UserRole } from "../dto/UserDto";

export interface User {
  name: string;
  surname: string;
  email: string;
  role: UserRole;
  id?: string;
}
