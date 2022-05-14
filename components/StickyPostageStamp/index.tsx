import { FC, useCallback, useContext, useRef } from "react";
import classNames from "classnames";

import { SlideSectionContext } from "../../contexes/SlideSection";
import { useAnimation } from "../../hooks/use-animation";
import { useCssVar } from "../../hooks/use-css-var";
import { PostageStamp, PostageStampProps } from "../PostageStamp";

export type StickyPostageStampProps = { className?: string } & PostageStampProps;

export const StickyPostageStamp: FC<StickyPostageStampProps> = ({
  className,
  ...postageStampProps
}) => {
  const { slideRef } = useContext(SlideSectionContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const setTranslateYValue = useCssVar("postage-stamp-translate-y");

  const movePostageStamp = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    const offset = slideRef.current?.getBoundingClientRect().top;
    containerRef.current.style.top = `${offset > 0 ? -offset : Math.abs(offset)}px`;

    const scrollRatioPercent = parseFloat(
      (
        (document.documentElement.scrollTop + window.innerHeight) /
        document.documentElement.scrollHeight
      ).toFixed(2),
    );

    setTranslateYValue(() => `${scrollRatioPercent * 25}%`);
    window.requestAnimationFrame(movePostageStamp);
  }, [setTranslateYValue, slideRef]);

  useAnimation({ cb: movePostageStamp, fps: 1 });

  return (
    <div
      ref={containerRef}
      className={classNames(
        "origin-center rotate-[-21deg] translate-y-[var(--postage-stamp-translate-y)] -top-full transition-all ease-linear",
        className,
      )}
    >
      <PostageStamp {...postageStampProps} />
    </div>
  );
};
