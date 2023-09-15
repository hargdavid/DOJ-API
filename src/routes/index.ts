import { contentRoutes, contentPath } from "./contentRoutes";
import { RouteObject } from "../model/types";
import { userRoutes, userPath } from "./userRoutes";
import { registerPath, registerRoutes } from "./registerRoutes";
import { authPath, authRoutes } from "./loginRoutes";

const routes: RouteObject[] = [
  { path: contentPath, routes: contentRoutes },
  { path: userPath, routes: userRoutes },
  { path: registerPath, routes: registerRoutes },
  { path: authPath, routes: authRoutes },
];

export default routes;
