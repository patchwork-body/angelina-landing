import { FC, ReactNode } from "react";

export const Padding: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="px-12">{children}</div>;
};
