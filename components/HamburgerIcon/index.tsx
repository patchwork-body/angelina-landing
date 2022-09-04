import classNames from "classnames";
import { FC } from "react";

export const HamburgerIcon: FC<{ opened?: boolean }> = ({ opened }) => {
  return (
    <svg
      id="hamburger-menu"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="hamburger-lines" className={classNames({ "opened": opened })}>
        <rect id="top" x="5" y="27" width="90" height="6" rx="3.5" fill="#fafafa" />
        <rect id="middle" x="5" y="47" width="90" height="6" rx="3.5" fill="#fafafa" />
        <rect id="bottom" x="5" y="67" width="90" height="6" rx="3.5" fill="#fafafa" />
      </g>
    </svg>
  );
};
