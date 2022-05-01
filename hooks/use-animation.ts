import { useCallback, useEffect, useRef } from "react";

export const useAnimation: (params: { cb: VoidFunction; fps: number }) => void = ({ cb, fps }) => {
  const FRAME_DURATION = 1000 / fps;
  const lastFrameTime = useRef(0);

  const animate = useCallback(
    (time: number) => {
      if (time - lastFrameTime.current > FRAME_DURATION || lastFrameTime.current === 0) {
        cb();
      }

      lastFrameTime.current = time;
      return window.requestAnimationFrame(animate);
    },

    [FRAME_DURATION, cb],
  );

  // ComponentDidMount
  useEffect(() => {
    const requestId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
