import { FC } from "react";
import s from "./PostItem.module.css";
import { IPostItem } from "./types";

export const PostItem: FC<IPostItem> = ({ title, body }) => {
  return (
    <div className={s.postItem}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{body}</p>
    </div>
  );
};
