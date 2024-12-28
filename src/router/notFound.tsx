import { Layout } from "layouts";
import { type RouteObject } from "react-router-dom";

export const nodeFoundRoute: RouteObject[] = [
  {
    path: "*",
    element: (
      <Layout>
        <div>Page not found</div>
      </Layout>
    ),
  },
];
