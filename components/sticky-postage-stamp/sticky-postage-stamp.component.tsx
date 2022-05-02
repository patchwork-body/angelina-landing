import { FC, useCallback, useContext, useRef } from "react";
import { StickySlideContext } from "../../contexes/sticky-slide";
import { useAnimation } from "../../hooks/use-animation";
import { useCssVar } from "../../hooks/use-css-var";
import { PostageStamp, PostageStampProps } from "../postage-stamp";
export type StickyPostageStampProps = PostageStampProps;

export const StickyPostageStamp: FC<StickyPostageStampProps> = ({ ...postageStampProps }) => {
  const { slideRef } = useContext(StickySlideContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const setRotateAngleValue = useCssVar("postage-stamp-rotate-angle");
  const setTranslateYValue = useCssVar("postage-stamp-translate-y");

  const movePostageStamp = useCallback(() => {
    const offset = slideRef.current?.getBoundingClientRect().top;
    containerRef.current.style.top = `${offset > 0 ? -offset : Math.abs(offset)}px`;

    const scrollRatioPercent = parseFloat(
      (
        (document.documentElement.scrollTop + window.innerHeight) /
        document.documentElement.scrollHeight
      ).toFixed(2),
    );

    setRotateAngleValue(() => `${Math.round(scrollRatioPercent * 360 - 140)}deg`);
    setTranslateYValue(() => `${scrollRatioPercent * 150}%`);
    window.requestAnimationFrame(movePostageStamp);
  }, [setRotateAngleValue, setTranslateYValue, slideRef]);

  useAnimation({ cb: movePostageStamp, fps: 1 });

  return (
    <div
      ref={containerRef}
      className="absolute left-52 drop-shadow-md origin-center hidden md:block rotate-[var(--postage-stamp-rotate-angle)] translate-y-[var(--postage-stamp-translate-y)]"
    >
      <PostageStamp {...postageStampProps} />
    </div>
  );
};