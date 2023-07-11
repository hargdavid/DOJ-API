import "dotenv/config";
import express from "express";
import routes from "./routes";
import { RouteObject } from "./model/types";
import { connectToDatabase } from "./db/conn";

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase().then(() => {
  routes.forEach((route: RouteObject) => {
    app.use(route.path, route.routes);
  });

  app.listen(port, () => {
    console.log(`Started application on port ${port}`);
  });
});
