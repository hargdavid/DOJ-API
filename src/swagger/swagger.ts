import { version } from "../../package.json";
import swaggerJsdoc from "swagger-jsdoc";

export const swaggerDoc = swaggerJsdoc({
  swaggerDefinition: {
    openapi: "3.0.3",
    produces: ["application/json"],
    info: {
      title: "DOJ API",
      description: "API for DOJ written in node/express",
      version: version,
    },
  },
  apis: ["./src/routes/*Routes.ts", "./src/model/dto/*.ts"],
});
