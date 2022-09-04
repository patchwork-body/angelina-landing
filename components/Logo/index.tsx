import classNames from "classnames";
import { memo } from "react";

export type LogoProps = {
  className?: string;
};

export const Logo = memo(function Logo({ className }: LogoProps) {
  return (
    <>
      <h1
        className={classNames(
          "hidden md:block text-logo/md text-white font-serif tracking-widest drop-shadow-main",
          className,
        )}
      >
        CUTE ENGLISH HUB
      </h1>

      <h1
        className={classNames(
          "md:hidden text-logo/sm text-white font-serif tracking-widest drop-shadow-main",
          className,
        )}
      >
        C.E.H
      </h1>
    </>
  );
});
