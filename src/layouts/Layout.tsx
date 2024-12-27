import { Header } from "modules/Header";
import { FC, PropsWithChildren } from "react";
import s from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={s.content}>
        <div className={s.container}>{children}</div>
      </div>
    </>
  );
};
