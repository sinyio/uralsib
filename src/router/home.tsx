import { Layout } from "layouts";
import { Home } from "pages/Home";
import { type RouteObject } from "react-router-dom";

export const homeRoute: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
];
