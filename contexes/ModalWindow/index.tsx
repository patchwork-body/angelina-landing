import { FC } from "react";
import { ReactNode } from "react";
import { RefObject } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";

export type ModalWindowContextValue = {
  isOpen: boolean;
  containerRef: RefObject<HTMLDivElement> | null;
  toggle: VoidFunction;
};

export const ModalWindowContext = createContext<ModalWindowContextValue>({
  isOpen: false,
  containerRef: null,
  toggle: () => void 0,
});

export type ModalWindowProviderProps = {
  children: ReactNode;
};

export const ModalWindowContextProvider: FC<ModalWindowProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen), [isOpen];
  }, [isOpen]);

  return (
    <ModalWindowContext.Provider value={{ isOpen, containerRef, toggle }}>
      <>
        <div
          ref={containerRef}
          className="fixed z-50 w-full h-full grid place-items-center pointer-events-none"
        ></div>
        {children}
      </>
    </ModalWindowContext.Provider>
  );
};
