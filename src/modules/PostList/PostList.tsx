import { FC } from "react";
import { IPostList } from "./types";
import { PostItem } from "modules/PostItem";
import s from "./PostList.module.css";
import { useNavigate } from "react-router-dom";

export const PostList: FC<IPostList> = ({ postList }) => {
  const router = useNavigate();

  return (
    <ul className={s.postList}>
      {postList?.map((post) => (
        <li
          className={s.postItem}
          key={post.id}
          onClick={() => router(`/posts/${post.id}`)}
        >
          <PostItem id={post.id} title={post.title} body={post.body} />
        </li>
      ))}
    </ul>
  );
};
