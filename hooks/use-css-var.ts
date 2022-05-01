import { useCallback, useEffect, useRef } from "react";

export const useCssVar = (name: string) => {
  const propertyName = `--${name}`;
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    root.current = document.querySelector<HTMLElement>(":root");
  }, []);

  const setValue = useCallback(
    (cb: (value: number) => string) => {
      root.current.style.setProperty(
        propertyName,
        cb(parseFloat(window.getComputedStyle(root.current).getPropertyValue(propertyName))),
      );
    },

    [propertyName],
  );

  return setValue;
};
