import { FC, ForwardedRef, forwardRef, ReactNode } from "react";
import classNames from "classnames";

export type ComicsEmojiProps = {
  className?: string;
  children: ReactNode;
  emoji: string;
};

export const ComicsEmoji = forwardRef(function ComicsEmoji(
  { className, emoji, children }: ComicsEmojiProps,
  forwardedRef: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={forwardedRef}
      className={classNames("grid items-center grid-flow-col auto-cols-auto", className)}
    >
      {children}
      <span className="text-4xl translate-y-2">{emoji}</span>
    </div>
  );
});
