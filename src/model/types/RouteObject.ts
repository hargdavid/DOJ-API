import { Router } from "express";

export type RouteObject = {
  path: string;
  routes: Router;
};
