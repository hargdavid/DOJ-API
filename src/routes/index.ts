import { contentRoutes, routePath } from "./contentRoutes";
import { RouteObject } from "../model/types";

const routes: RouteObject[] = [{ path: routePath, routes: contentRoutes }];

export default routes;
