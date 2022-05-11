import { useCallback, useContext, useEffect, useRef } from "react";

import { SlideSectionContext } from "../../contexes/SlideSection";

export const BulletList = () => {
  const { setupIntersectionObserver } = useContext(SlideSectionContext);
  const firstPoint = useRef<HTMLLIElement>(null);
  const secondPoint = useRef<HTMLLIElement>(null);
  const thirdPoint = useRef<HTMLLIElement>(null);

  // TODO replace with useEvent
  const onIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
        firstPoint.current.classList.remove("hidden");
      }

      if (entry.intersectionRatio >= 0.7) {
        secondPoint.current.classList.remove("hidden");
      }

      if (entry.intersectionRatio >= 0.9) {
        thirdPoint.current.classList.remove("hidden");
      }
    });
  }, []);

  useEffect(
    () => setupIntersectionObserver(onIntersection, { threshold: [0.5, 0.7, 0.9] }),
    [onIntersection, setupIntersectionObserver],
  );

  return (
    <ul className="grid gap-y-32 font-serif mx-auto font-semibold text-3xl text-gray-100">
      <li ref={firstPoint} className="hidden animate-appearance duration-1000">
        Учись новому и развивайся
      </li>

      <li ref={secondPoint} className="hidden animate-appearance">
        Смотри фильмы в оригинале
      </li>

      <li ref={thirdPoint} className="hidden animate-appearance">
        Путешествуй и общайся без границ
      </li>
    </ul>
  );
};
