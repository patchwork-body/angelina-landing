import { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-lg m-auto">{children}</div>;
};
