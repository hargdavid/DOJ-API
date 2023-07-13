import { User } from "../../model/db/User";
import { CreateUserDto } from "../../model/dto/UserDto";
import { UserRole } from "../../model/enums/UserRole";
import { convertUserRoleToNumber } from "../converters/userRole";

export const validateCreateUser = (
  user: CreateUserDto
): { user: User; password: string } => {
  const newUser: User = {
    firstName: user.firstName,
    surName: user.surName,
    email: user.email,
    role: convertUserRoleToNumber(user.role),
  };

  const password = "";

  return { user: newUser, password };
};
