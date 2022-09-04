import { createContext, FC, ReactNode, useCallback, useRef } from "react";
import classNames from "classnames";
import { RefObject } from "react";

export type SlideSectionContextValue = {
  slideRef: RefObject<HTMLDivElement> | null;

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
      if (!slideRef.current) {
        return () => void 0;
      }

      const target = slideRef.current;
      const observer = new IntersectionObserver(onIntersection, options);
      observer.observe(target);
      return () => observer.unobserve(target);
    },

    [],
  );

  return (
    <SlideSectionContext.Provider value={{ slideRef, setupIntersectionObserver }}>
      <section ref={slideRef} className={classNames("min-h-screen", className)}>
        {/* NOTE: Don't remove style prop I don't know why but corresponding tailwindcss classes don't work here */}
        <div
          style={{
            minHeight: "100vh",
            maxWidth: "1000px",
            overflow: "hidden",
            paddingBottom: "3rem",
          }}
          className="relative grid mx-auto"
        >
          {children}
        </div>
      </section>
    </SlideSectionContext.Provider>
  );
};
