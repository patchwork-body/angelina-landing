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
      slideRef.current?.getBoundingClientRect().top - slideRef.current.clientHeight / 4;

    headingRef.current.style.top = `${offset > 0 ? -offset : Math.abs(offset)}px`;
  }, [slideRef]);

  useAnimation({ cb: moveTitle, fps: 120 });

  return (
    <h1
      ref={headingRef}
      className={classNames("animate-appearance absolute w-full text-center", className)}
    >
      {children}
    </h1>
  );
};
