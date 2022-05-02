import { createContext, FC, MutableRefObject, ReactNode, useCallback, useRef } from "react";
import classNames from "classnames";

export type StickySlideContextValue = {
  slideRef: MutableRefObject<HTMLDivElement>;

  setupIntersectionObserver: (
    onIntersection: IntersectionObserverCallback,
    options: IntersectionObserverInit,
  ) => () => void;
};

export const StickySlideContext = createContext<StickySlideContextValue>({
  slideRef: null,
  setupIntersectionObserver: () => () => void 0,
});

export type StickySlideContextProviderProps = {
  children: ReactNode;
  className?: string;
};

export const StickySlideContextProvider: FC<StickySlideContextProviderProps> = ({
  children,
  className,
}) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const setupIntersectionObserver = useCallback(
    (onIntersection: IntersectionObserverCallback, options: IntersectionObserverInit) => {
      const target = slideRef.current;
      const observer = new IntersectionObserver(onIntersection, options);
      observer.observe(target);
      return () => observer.unobserve(target);
    },

    [],
  );

  return (
    <StickySlideContext.Provider value={{ slideRef, setupIntersectionObserver }}>
      <div
        ref={slideRef}
        className={classNames("sticky top-0 overflow-hidden h-screen", className)}
      >
        {children}
      </div>
    </StickySlideContext.Provider>
  );
};
