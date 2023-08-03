import classNames from "classnames";
import { FC } from "react";

export type TelegramLinkProps = {
  className?: string;
};

export const TelegramLink: FC<TelegramLinkProps> = ({ className }) => (
  <a
    className={classNames("cursor-pointer", className)}
    target="_blank"
    href="https://m.vk.com/public212887000?from=groups%253Fact%253Dlist"
    rel="noopener noreferrer"
  >
    <svg
      fill="none"
      viewBox="0 0 49 48"
      height="48"
      width="49"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(0.7)"
    >
      <path
        d="m226.33 494.72c145.76-63.505 242.96-105.37 291.59-125.6 138.86-57.755 167.71-67.787 186.51-68.119 4.1362-0.0729 13.384 0.95221 19.375 5.8132 5.0584 4.1045 6.4501 9.6491 7.1161 13.541s1.4953 12.756 0.83608 19.683c-7.5246 79.062-40.084 270.92-56.648 359.47-7.0089 37.469-20.81 50.032-34.17 51.262-29.036 2.6719-51.084-19.189-79.207-37.624-44.006-28.847-68.867-46.804-111.58-74.953-49.366-32.531-17.364-50.411 10.769-79.631 7.3626-7.6471 135.3-124.01 137.77-134.57 0.30968-1.3202 0.59708-6.2414-2.3265-8.8399s-7.2385-1.71-10.352-1.0032c-4.4137 1.0017-74.715 47.468-210.9 139.4-19.955 13.702-38.029 20.379-54.223 20.029-17.853-0.3857-52.194-10.094-77.723-18.393-31.313-10.178-56.199-15.56-54.032-32.846 1.1287-9.0037 13.528-18.212 37.197-27.624z"
        fill="currentColor"
      />
    </svg>
  </a>
);