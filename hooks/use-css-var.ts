import { useCallback, useEffect, useRef } from "react";

export const useCssVar = (name: string) => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    root.current = document.querySelector<HTMLElement>(":root");
  }, []);

  const setValue = useCallback(
    (value: string) => {
      root.current.style.setProperty(`--${name}`, value);
    },

    [name],
  );

  return setValue;
};
