"use strict";
import "dotenv/config";
import express from "express";
import routes from "./routes";
import { RouteObject } from "./model/types";
import { connectToDatabase } from "./db/conn";
import swaggerUi from "swagger-ui-express";
import { swaggerDoc } from "./swagger/swagger";

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase().then(() => {
  routes.forEach((route: RouteObject) => {
    app.use(route.path, route.routes);
  });

  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  app.listen(port, () => {
    console.log(`Started application on port ${port}`);
  });
});
