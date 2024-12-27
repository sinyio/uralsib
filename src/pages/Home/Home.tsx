import { PostList } from "modules/PostList";
import { FC, useEffect, useState } from "react";
import { fetchPosts } from "services/posts";
import { IPostItem } from "modules/PostItem/types";
import { Loader } from "shared/components/Loader";

export const Home: FC = () => {
  const [posts, setPosts] = useState<IPostItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetch();
  }, []);

  if (isLoading) return <Loader />;

  if (isError) return <div>Error</div>;

  return <PostList postList={posts} />;
};
