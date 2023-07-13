import { UserRole } from "../../model/enums/UserRole";

export const convertUserRoleToNumber = (role: UserRole): number => {
  switch (role) {
    case UserRole.Admin:
    default:
      return 0;
  }
};
