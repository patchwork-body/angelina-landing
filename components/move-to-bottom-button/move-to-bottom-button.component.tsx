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
    <button className={classNames("", className)} type="button" onClick={moveToBottom}>
      Начать учиться
    </button>
  );

  {
    /* <div className="hidden lg:block absolute">
        <svg width="300" height="200" viewBox="0 0 100.6 61.909" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.556 60.4c3.933-4.623 8.253-8.934 12.743-13.016 1.383-1.257 2.81-2.465 4.215-3.697 7.232-6.32 15.001-12.124 23.441-16.744 6.447-3.768 13.568-6.09 20.73-8.066 6.604-1.795 13.438-2.21 20.234-2.61 2.51-.179 5.027-.229 7.541-.307.553-.018 1.106-.04 1.659-.064.336-.015.71.104 1.01-.052 1.21-.633 2.277-1.508 3.416-2.262-.368-.303-.706-.647-1.103-.91-.717-.474-4.267-2.392-4.772-2.656-3.216-1.677-6.509-3.205-9.779-4.771-2.531-1.21-5.091-2.356-7.633-3.541-1.15-.536-2.316-1.042-3.401-1.7-.889.768-2.285 1.192-2.666 2.302-.192.56 1.126.363 1.682.565.989.359 1.97.74 2.952 1.117 3.853 1.481 7.695 2.994 11.548 4.477 3.91 1.543 7.883 2.923 11.805 4.432-.01.115.043.255-.03.343-.277.338-.657.577-.972.88-1.114 1.071-4.694 4.652-5.43 5.45-3.66 3.973-4.372 5.077-7.787 9.448-4.797 6.884-2.501 3.513-6.899 10.103l2.562-1.123c4.224-6.53 1.982-3.187 6.75-10.013 3.683-4.601 4.156-5.42 8.156-9.565 1.115-1.156 2.298-2.246 3.464-3.35.135-.128 3.195-2.671 3.587-3.67.084-.214-.161-.43-.242-.645a217.85 217.85 0 0 1-12.373-4.033C84.14 5.283 80.341 3.8 76.611 2.128c-.913-.409-1.814-.845-2.717-1.278-.505-.242-.963-.879-1.508-.746-1.38.335-2.5 1.35-3.75 2.024 3.895 1.524 7.723 3.214 11.547 4.906 5.093 2.4 10.342 4.703 14.797 8.204 1.06-.547 2.215-.94 3.182-1.64.302-.22-.74.105-1.112.14-.579.057-1.159.1-1.74.135-2.55.151-5.105.195-7.654.375-6.835.516-13.728.883-20.387 2.643-7.235 1.984-14.44 4.317-20.946 8.136-2.158 1.24-4.332 2.455-6.475 3.723a140.864 140.864 0 0 0-21.935 15.994c-1.431 1.247-2.884 2.47-4.294 3.74C8.883 52.754 4.355 57.261 0 61.914L3.556 60.4z"
            fill="#f3f4f4"
          />
        </svg>
      </div>

      <span className="hidden lg:grid place-content-start pl-4 pb-3 text-gray-100 font-serif font-semibold text-lg lg:text-2xl">
        Запишись
        <br />
        на свой первый урок
      </span> */
  }
};
