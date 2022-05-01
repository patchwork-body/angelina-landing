import { createContext, FC, MutableRefObject, ReactNode, useRef } from "react";
import classNames from "classnames";

export type StickySlideContextValue = {
  slideRef: MutableRefObject<HTMLDivElement>;
};

export const StickySlideContext = createContext<StickySlideContextValue>({
  slideRef: null,
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

  return (
    <StickySlideContext.Provider value={{ slideRef }}>
      <div
        ref={slideRef}
        className={classNames("sticky top-0 overflow-hidden h-screen", className)}
      >
        {children}
      </div>
    </StickySlideContext.Provider>
  );
};
