import classNames from "classnames";
import { FC, ReactNode, useCallback, useContext, useEffect, useRef } from "react";
import { StickySlideContext } from "../../contexes/sticky-slide";

export type StickyHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const StickyHeading: FC<StickyHeadingProps> = ({ children, className }) => {
  const { slideRef } = useContext(StickySlideContext);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const moveTitle = useCallback(() => {
    const offset = slideRef.current.getBoundingClientRect().top - slideRef.current.clientHeight / 2;
    headingRef.current.style.top = `${offset > 0 ? -offset : Math.abs(offset)}px`;
    window.requestAnimationFrame(moveTitle);
  }, [slideRef]);

  // ComponentDidMount
  useEffect(() => {
    window.requestAnimationFrame(moveTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
