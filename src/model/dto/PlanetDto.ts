/**
 * @openapi
 * components:
 *  schemas:
 *    Planet:
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

export interface PlanetDto {
  name: string;
  orderFromSun: number;
  hasRings: boolean;
  mainAtmosphere: string[];
  surfaceTemperatureC: TemperatureDto;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    Temperature:
 *      type: object
 *      properties:
 *        min:
 *          required: false
 *          type:
 *            number
 *        max:
 *          required: false
 *          type:
 *            number
 *        mean:
 *          required: false
 *          type:
 *            number
 *
 */
interface TemperatureDto {
  min: number | null;
  max: number | null;
  mean: number | null;
}
