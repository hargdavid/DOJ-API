/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterDto:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        orderFromSun:
 *          type: number
 *        hasRings:
 *          type: boolean
 *        mainAtmosphere:
 *          type: array
 *          items:
 *            type: string
 *        surfaceTemperatureC:
 *          $ref: '#/components/schemas/Temperature'
 */

export interface RegisterDto {
  name: string;
}
