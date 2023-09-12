import { contentRoutes, contentPath } from "./contentRoutes";
import { RouteObject } from "../model/types";
import { userRoutes, userPath } from "./userRoutes";
import { registerPath, registerRoutes } from "./registerRoutes";

const routes: RouteObject[] = [
  { path: contentPath, routes: contentRoutes },
  { path: userPath, routes: userRoutes },
  { path: registerPath, routes: registerRoutes },
];

export default routes;
