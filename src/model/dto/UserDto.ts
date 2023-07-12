/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        surname:
 *          type: string
 *        email:
 *          type: string
 *        role:
 *          type: string
 */

export interface UserDto {
  name: string;
  surname: string;
  email: string;
  role: UserRole;
}

export enum UserRole {
  Admin = "Admin",
}
