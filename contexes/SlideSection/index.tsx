import { createContext, FC, MutableRefObject, ReactNode, useCallback, useRef } from "react";
import classNames from "classnames";

export type SlideSectionContextValue = {
  slideRef: MutableRefObject<HTMLDivElement>;

  setupIntersectionObserver: (
    onIntersection: IntersectionObserverCallback,
    options: IntersectionObserverInit,
  ) => () => void;
};

export const SlideSectionContext = createContext<SlideSectionContextValue>({
  slideRef: null,
  setupIntersectionObserver: () => () => void 0,
});

export type SlideSectionContextProviderProps = {
  children: ReactNode;
  className?: string;
};

export const SlideSectionContextProvider: FC<SlideSectionContextProviderProps> = ({
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
    <SlideSectionContext.Provider value={{ slideRef, setupIntersectionObserver }}>
      <section ref={slideRef} className={classNames("overflow-hidden h-screen", className)}>
        {/* NOTE: Don't remove style prop I don't know why but corresponding tailwindcss classes don't work here */}
        <div style={{ height: "100vh", maxWidth: "1000px" }} className="relative grid mx-auto">
          {children}
        </div>
      </section>
    </SlideSectionContext.Provider>
  );
};
