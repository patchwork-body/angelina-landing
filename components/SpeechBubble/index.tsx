import { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export type SpeechBubbleProps = {
  className?: string;
  children: ReactNode;
};

export const SpeechBubble: FC<SpeechBubbleProps> = ({ className, children }) => (
  <span
    className={classNames(
      styles["speech-bubble"],
      "z-10 grid place-items-center text-slate-700 font-serif font-semibold",
      className,
    )}
  >
    {children}
  </span>
);
