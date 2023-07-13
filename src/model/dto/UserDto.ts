import { UserRole } from "../enums/UserRole";

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *        surName:
 *          type: string
 *        userId:
 *          required: false
 *          type: number
 *        email:
 *          type: string
 *        role:
 *          type: string
 */
export interface UserDto {
  firstName: string;
  surName: string;
  userId?: number;
  email: string;
  role: UserRole;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserDto:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *        surName:
 *          type: string
 *        email:
 *          type: string
 *        role:
 *          type: string
 *        password:
 *          type: string
 */
export interface CreateUserDto extends UserDto {
  password: string;
}
