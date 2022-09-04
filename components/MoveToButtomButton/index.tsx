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
        "px-20 py-4 bg-atctic-lime ring-4 ring-white rounded-lg m-auto group",
        className,
      )}
      type="button"
      onClick={moveToBottom}
    >
      <span className="text-white text-lg drop-shadow-main font-serif-alternate font-bold">
        {children}
      </span>
    </button>
  );
};
