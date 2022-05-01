import classNames from "classnames";
import { FC, ReactNode, useCallback, useContext, useRef } from "react";
import { StickySlideContext } from "../../contexes/sticky-slide";
import { useAnimation } from "../../hooks/use-animation";

export type StickyHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const StickyHeading: FC<StickyHeadingProps> = ({ children, className }) => {
  const { slideRef } = useContext(StickySlideContext);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const moveTitle = useCallback(() => {
    if (!headingRef.current) {
      return;
    }

    const offset =
      slideRef.current?.getBoundingClientRect().top - slideRef.current.clientHeight / 2;

    headingRef.current.style.top = `${offset > 0 ? -offset : Math.abs(offset)}px`;
  }, [slideRef]);

  useAnimation({ cb: moveTitle, fps: 120 });

  return (
    <h1
      ref={headingRef}
      className={classNames(
        "absolute -top-1/2 -translate-y-1/2 w-full text-center text-4xl font-serif text-gray-700",
        className,
      )}
    >
      {children}
    </h1>
  );
};
