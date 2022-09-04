import classNames from "classnames";
import { memo } from "react";

export type DesktopMenuProps = {
  className?: string;
};

export const DesktopMenu = memo(function DesktopMenu({ className }: DesktopMenuProps) {
  return (
    <ul className={classNames("grid grid-flow-col gap-x-8 text-white", className)}>
      <li className="text-sm font-serif font-semibold drop-shadow-main">Блог</li>
      <li className="text-sm font-serif font-semibold drop-shadow-main">Обо мне</li>
      <li className="text-sm font-serif font-semibold drop-shadow-main">Отзывы учеников</li>
    </ul>
  );
});
