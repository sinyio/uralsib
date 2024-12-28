import { createBrowserRouter } from "react-router-dom";
import { homeRoute } from "./home";
import { postDetailedRoute } from "./postDetailed";
import { nodeFoundRoute } from "./notFound";

export const router = createBrowserRouter([
  ...homeRoute,
  ...postDetailedRoute,
  ...nodeFoundRoute,
]);
