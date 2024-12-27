import { FC } from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <Link to="/">
      <div className={s.header}>POSTS</div>
    </Link>
  );
};
