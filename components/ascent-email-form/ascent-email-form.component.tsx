import { FC, useCallback, useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, watch } = useForm({
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const isEmailProvided = watch("email").length > 0;
  const submit = useCallback(() => {}, []);

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(submit)}
      className={classNames(
        "fixed bottom-0 grid place-items-center transition-transform duration-500",

        {
          "-translate-y-[calc(50vh-50%)]": isTheBottom,
          "translate-y-[calc(50vh-50%)]": !isTheBottom,
        },
      )}
    >
      <label className="relative grid items-center align-middle group">
        <span
          className={classNames(
            "absolute font-serif font-semibold leading-6 cursor-text transition-all",

            {
              "ml-8 text-2xl text-gray-700/50": !isEmailProvided,
              "ml-2 -translate-y-14 text-lg text-gray-700": isEmailProvided,
            },
          )}
        >
          Напиши нам свой Email
        </span>

        <input
          {...register("email")}
          className={classNames(
            "w-[70vw] md:w-[55vw] lg:w-[40vw] max-w-lg py-5 px-8 rounded-xl focus:ring-8 ring-blue-200 bg-gray-100",
            "transition-shadow duration-300 outline-none text-2xl text-slate-900 font-serif font-semibold group-hover:shadow-md",
          )}
          type="email"
        />
      </label>

      <button
        className={classNames(
          "absolute -bottom-[calc(100%+1rem)] py-5 bg-green-500 w-full rounded-lg font-semibold font-serif text-2xl text-gray-100 transition-opacity duration-700",

          {
            "opacity-0": !isEmailProvided,
            "opacity-100": isEmailProvided,
          },
        )}
        type="submit"
      >
        Хочу учиться!
      </button>
    </form>
  );
};
