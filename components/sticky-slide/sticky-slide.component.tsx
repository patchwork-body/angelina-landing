import { FC, useCallback, useEffect, useRef } from "react";
import cn from "classnames";

export type StickySlideProps = {
  text: string;
  slideClassName?: string;
  titleClassName?: string;
};

export const StickySlide: FC<StickySlideProps> = ({ text, slideClassName, titleClassName }) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const moveTitle = useCallback(() => {
    const offset = slideRef.current.getBoundingClientRect().top - slideRef.current.clientHeight / 2;
    titleRef.current.style.top = `${offset > 0 ? -offset : Math.abs(offset)}px`;
    window.requestAnimationFrame(moveTitle);
  }, []);

  // ComponentDidMount
  useEffect(() => {
    window.requestAnimationFrame(moveTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={slideRef} className={cn("sticky top-0 overflow-hidden h-screen", slideClassName)}>
      <h1
        ref={titleRef}
        className={cn(
          "absolute -top-1/2 -translate-y-1/2 w-full text-center text-4xl font-serif text-gray-700",
          titleClassName,
        )}
      >
        {text}
      </h1>
    </div>
  );
};
