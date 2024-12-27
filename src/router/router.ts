import { createBrowserRouter } from "react-router-dom";
import { homeRoute } from "./home";
import { postDetailedRoute } from "./postDetailed";

export const router = createBrowserRouter([...homeRoute, ...postDetailedRoute]);
