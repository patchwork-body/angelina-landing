import { FC, ReactNode } from "react";

export const ExternalLink: FC<{ href: string; children: ReactNode }> = ({ href, children }) => (
  <a className={"cursor-pointer"} target="_blank" href={href} rel="noopener noreferrer">
    {children}
  </a>
);
