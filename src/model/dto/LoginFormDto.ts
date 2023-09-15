/**
 * @openapi
 * components:
 *  schemas:
 *    LoginFormDto:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        password:
 *          type: string
 */
export interface LoginFormDto {
  name: string;
  password: string;
}
