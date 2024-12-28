import { createBrowserRouter } from "react-router-dom";
import { homeRoute } from "./home";
import { postDetailedRoute } from "./postDetailed";
import { notFoundRoute } from "./notFound";

export const router = createBrowserRouter([
  ...homeRoute,
  ...postDetailedRoute,
  ...notFoundRoute,
]);
