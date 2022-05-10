import { FC } from "react";
import classNames from "classnames";
import { useCallback } from "react";

export type MoveToButtomButtonProps = {
  className?: string;
};

export const MoveToButtomButton: FC<MoveToButtomButtonProps> = ({ className }) => {
  const moveToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      className={classNames(
        "font-serif font-semibold text-3xl ring-4 ring-slate-200 px-8 py-4 rounded-lg",
        "hover:bg-green-500/90 transition-colors duration-700",
        className,
      )}
      type="button"
      onClick={moveToBottom}
    >
      Начать учиться
    </button>
  );
};
