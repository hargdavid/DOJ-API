/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterDto:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        dietPreferences:
 *          type: boolean
 *        attending:
 *          type: number
 *        typeOfDiet:
 *          type: string
 */

export interface RegisterDto {
  name: string;
  email: string;
  dietPreferences: boolean;
  attending: AttendingDays;
  typeOfDiet: string;
}

export enum AttendingDays {
  FRISUN,
  SATSUN,
  SAT,
}
