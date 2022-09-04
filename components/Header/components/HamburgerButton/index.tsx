import { HamburgerIcon } from "components/HamburgerIcon";
import { FC, MouseEventHandler } from "react";
import classnames from "classnames";

export const HamburgerButton: FC<{
  className?: string;
  opened: boolean;
  toggleMenu?: MouseEventHandler<HTMLButtonElement>;
}> = ({ className, opened, toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className={classnames(className)}>
      <HamburgerIcon opened={opened} />
    </button>
  );
};
