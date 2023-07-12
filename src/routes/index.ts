import { contentRoutes, contentPath } from "./contentRoutes";
import { RouteObject } from "../model/types";
import { userRoutes, userPath } from "./userRoutes";

const routes: RouteObject[] = [
  { path: contentPath, routes: contentRoutes },
  { path: userPath, routes: userRoutes },
];

export default routes;
