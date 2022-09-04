import classNames from "classnames";
import { SocialLinks } from "components/SocialLinks";
import { FC } from "react";

export const MobileMenu: FC<{ opened: boolean }> = ({ opened }) => {
  return (
    <div
      className={classNames("grid auto-rows-min gap-y-8 transition-opacity/height ", {
        "opacity-0 max-h-0 min-h-0 pointer-events-none": !opened,
        "min-h-screen pt-20": opened,
      })}
    >
      <ul className="grid grid-flow-row gap-y-6 place-items-center text-lg text-white font-serif">
        <li className="drop-shadow-main">Блог</li>
        <li className="drop-shadow-main">Обо мне</li>
        <li className="drop-shadow-main">Отзывы учеников</li>
      </ul>

      <div className="grid place-items-center">
        <SocialLinks />
      </div>
    </div>
  );
};
