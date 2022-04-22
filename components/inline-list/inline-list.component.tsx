import { FC, ReactNode, Children } from "react";

export const InlineList: FC<{ children: ReactNode }> = ({ children }) => (
  <ul className="grid grid-flow-col auto-cols-auto items-center text-center gap-x-4">
    {Children.map(children, (child, index) => (
      <li key={index}>{child}</li>
    ))}
  </ul>
);
