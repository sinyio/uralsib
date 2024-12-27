import { FC } from "react";
import { ICommentList } from "./types";
import { CommentItem } from "modules/CommentItem";
import s from "./CommentList.module.css";

export const CommentList: FC<ICommentList> = ({ commentList }) => {
  return (
    <ul className={s.commentList}>
      {commentList?.map((comment) => (
        <li className={s.commentItem} key={comment.id}>
          <CommentItem name={comment.name} body={comment.body} />
        </li>
      ))}
    </ul>
  );
};
