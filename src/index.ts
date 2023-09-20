"use strict";
import "dotenv/config";
import express from "express";
import routes from "./routes";
import { RouteObject } from "./model/types";
import cors from "cors";
import connectDB from "./db/db";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.enable("trust proxy");

connectDB();

app.use(express.json());

routes.forEach((route: RouteObject) => {
  app.use(route.path, route.routes);
});

/* app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc)); */
app.listen(port, () => {
  console.log(`Started application on port ${port}`);
});
