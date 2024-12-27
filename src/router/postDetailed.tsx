import { type RouteObject } from "react-router-dom";
import { PostDetailed } from "pages/PostDetailed";
import { Layout } from "layouts";

export const postDetailedRoute: RouteObject[] = [
  {
    path: "/posts/:id",
    element: (
      <Layout>
        <PostDetailed />
      </Layout>
    ),
  },
];
