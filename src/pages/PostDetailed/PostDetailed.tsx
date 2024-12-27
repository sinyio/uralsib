import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById, fetchPostComments } from "services/posts";
import s from "./PostDetailed.module.css";
import { Loader } from "shared/components/Loader";
import { CommentList } from "modules/CommentList";
import { ICommentItem } from "modules/CommentItem/types";

export const PostDetailed: FC = () => {
  const { id } = useParams();

  const [comments, setComments] = useState<ICommentItem[] | null>(null);
  const [postInfo, setPostInfo] = useState<{
    title: string;
    body: string;
  } | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const post = await fetchPostById(Number(id));
        setPostInfo({ title: post.title, body: post.body });
        const comments = await fetchPostComments(Number(id));
        setComments(comments);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchPostData();
  }, [id]);

  if (isLoading) return <Loader />;

  if (isError) return <div>Error</div>;

  return (
    <>
      <h1 className={s.title}>{postInfo?.title}</h1>
      <p className={s.text}>{postInfo?.body}</p>
      <div className={s.comments}>
        <h2 className={s.commentsTitle}>Comments</h2>
        <CommentList commentList={comments} />
      </div>
    </>
  );
};
