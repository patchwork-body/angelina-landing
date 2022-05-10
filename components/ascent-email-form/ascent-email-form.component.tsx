import { FC, useCallback, useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { SlideSectionContext } from "../../contexes/slide-section";

type FormValues = {
  email: string;
};

export type AscentEmailFormProps = {
  className?: string;
};

export const AscentEmailForm: FC<AscentEmailFormProps> = ({ className }) => {
  const { setupIntersectionObserver } = useContext(SlideSectionContext);
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

  const { register, handleSubmit, watch } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const isEmailProvided = watch("email").length > 0;

  const submit = useCallback((values: FormValues) => {
    console.log(values);
  }, []);

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(submit)}
      className={classNames(
        "grid place-items-center transition-transform duration-500",
        className,

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
              "ml-2 px-3 pt-1 rounded-t-lg group-focus-within:bg-blue-200 -translate-y-14 text-lg text-gray-50":
                isEmailProvided,
            },
          )}
        >
          Напиши нам свой Email
        </span>

        <input
          {...register("email")}
          className={classNames(
            "w-[70vw] md:w-[55vw] lg:w-[40vw] max-w-lg py-5 px-8 rounded-xl focus:ring-8 ring-blue-200 bg-gray-100",
            "transition-shadow duration-300 outline-none text-2xl text-slate-900 font-serif font-semibold group-hover:shadow-xl",
          )}
          type="email"
        />
      </label>

      <button
        className={classNames(
          "absolute -bottom-[calc(100%+1rem)] py-5 bg-green-500 w-full rounded-lg",
          "hover:shadow-xl outline-none focus:ring-8 ring-blue-200",
          "font-semibold font-serif text-2xl text-gray-100 transition-all duration-500",

          {
            "opacity-0 pointer-events-none": !isEmailProvided,
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
