import { FC } from "react";
import classNames from "classnames";
import { useCallback } from "react";

export const MoveToButtomButton: FC = () => {
  const moveToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="animate-appearance grid gap-y-24 grid-rows-[1fr,auto] h-screen p-16">
      <div className="grid items-end">
        <button
          className={classNames(
            "mx-auto ring-2 rounded-lg ring-gray-100 max-w-lg px-10 py-8",
            "font-serif font-semibold text-4xl text-gray-100 hover:bg-gray-100 hover:text-rose-500 transition-colors duration-500",
          )}
          type="button"
          onClick={moveToBottom}
        >
          Начать учиться
        </button>
      </div>

      <span className="text-gray-100 font-serif font-semibold text-4xl grid place-content-start">
        Запишись
        <br />
        на свой первый урок
      </span>
    </div>
  );
};
