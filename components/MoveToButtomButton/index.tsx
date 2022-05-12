import { FC, useCallback, ReactNode } from "react";
import classNames from "classnames";

export type MoveToButtomButtonProps = {
  className?: string;
  children?: ReactNode;
};

export const MoveToButtomButton: FC<MoveToButtomButtonProps> = ({ className, children }) => {
  const moveToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      className={classNames(
        "ring-4 focus:ring-sky-500 hover:ring-sky-500 outline-none ring-slate-100 px-8 py-4 rounded-lg",
        "bg-sky-500 focus:bg-slate-100 hover:bg-slate-100 transition-all duration-700 group",
        className,
      )}
      type="button"
      onClick={moveToBottom}
    >
      <span className="font-serif font-semibold text-slate-100 group-focus:text-sky-500 group-hover:text-sky-500 transition-colors duration-700 md:text-3xl">
        {children}
      </span>
    </button>
  );
};
