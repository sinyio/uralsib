import { FC } from "react";
import { ICommentItem } from "./types";
import s from "./CommentItem.module.css";
import { Avatar } from "shared/icons/Avatar";

export const CommentItem: FC<ICommentItem> = ({ name, body }) => {
  return (
    <div className={s.commentItem}>
      <div className={s.userInfo}>
        <div className={s.avatar}>
          <Avatar />
        </div>
        <span className={s.name}>{name}</span>
      </div>
      <p className={s.text}>{body}</p>
    </div>
  );
};
