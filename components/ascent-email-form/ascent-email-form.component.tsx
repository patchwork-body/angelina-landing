import { FC, useCallback, useContext, useEffect, useState } from "react";
import classNames from "classnames";

import { StickySlideContext } from "../../contexes/sticky-slide";

export const AscentEmailForm: FC = () => {
  const { setupIntersectionObserver } = useContext(StickySlideContext);
  const [isTheBottom, setIsTheBottom] = useState(false);

  const onIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
        setIsTheBottom(true);
      } else {
        setIsTheBottom(false);
      }
    });
  }, []);

  useEffect(
    () => setupIntersectionObserver(onIntersection, { threshold: 0.5 }),
    [onIntersection, setupIntersectionObserver],
  );

  return (
    <form
      className={classNames(
        "fixed bottom-0 grid place-items-center transition-transform duration-500 ",

        {
          "-translate-y-[calc(50vh-50%)]": isTheBottom,
          "translate-y-[calc(50vh-50%)]": !isTheBottom,
        },
      )}
    >
      <label className="relative grid items-center align-middle group">
        <span
          className={classNames(
            "absolute ml-8 font-serif font-semibold text-2xl leading-6 text-gray-800/50",
            "group-focus-within:ml-2 group-focus-within:-translate-y-14 group-focus-within:text-lg group-focus-within:text-slate-900 transition-all",
          )}
        >
          Напиши нам свой Email
        </span>

        <input
          className={classNames(
            "w-[70vw] md:w-[55vw] lg:w-[40vw] max-w-lg py-5 px-8 rounded-xl focus:ring-8 ring-blue-200",
            "transition-shadow duration-300 outline-none text-2xl text-slate-900 font-serif font-semibold",
          )}
          type="text"
        />
      </label>
    </form>
  );
};
