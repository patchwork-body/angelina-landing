import { FC, useCallback, useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { SlideSectionContext } from "../../contexes/SlideSection";
import { ModalPortal } from "../ModalPortal";
import { ModalWindowContext } from "../../contexes/ModalWindow";

type FormValues = {
  email: string;
};

export type AscentEmailFormProps = {
  className?: string;
};

export const AscentEmailForm: FC<AscentEmailFormProps> = ({ className }) => {
  const { setupIntersectionObserver } = useContext(SlideSectionContext);
  const [isTheBottom, setIsTheBottom] = useState(false);
  const { toggle } = useContext(ModalWindowContext);

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

  const submit = useCallback(
    async (values: FormValues) => {
      toggle();
      await fetch("/api/invite", { method: "POST", body: JSON.stringify(values) });
    },

    [toggle],
  );

  return (
    <>
      <ModalPortal>
        <div className="z-50 animate-appearance-modal bg-slate-100 rounded-xl">
          <div className="relative p-2 grid items-center h-full shadow-xl">
            <Image
              className="rounded-md"
              src="/t_me-patchwork_body.jpg"
              layout="fixed"
              width={320}
              height={650}
              alt="telegram qr code"
            />

            <button
              onClick={toggle}
              className="absolute pointer-events-auto bottom-5 left-1/2 -translate-x-1/2 font-serif font-semibold text-lg text-slate-700 w-full"
            >
              <span className="block bg-slate-100 w-[88%] mx-auto py-2 rounded-md hover:shadow-lg transition-shadow duration-500">
                Okay
              </span>
            </button>
          </div>
        </div>
      </ModalPortal>

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
                "ml-4 text-lg text-gray-700/50": !isEmailProvided,
                "-z-10 ml-2 group-focus-within:px-2 group-focus-within:pt-1 group-focus-within:pb-2 px-1 rounded-t-lg bg-blue-200 -translate-y-12 text-lg text-gray-50":
                  isEmailProvided,
              },
            )}
          >
            Напиши нам свой Email
          </span>

          <input
            {...register("email")}
            className={classNames(
              "w-[90vw] max-w-lg py-5 px-4 rounded-xl focus:ring-8 ring-blue-200 bg-gray-100",
              "transition-shadow duration-300 outline-none text-lg text-slate-900 font-serif font-semibold",
              {
                "ring-4": isEmailProvided,
              },
            )}
            type="email"
          />
        </label>

        <button
          className={classNames(
            "absolute -bottom-[calc(100%+1.5rem)] py-5 bg-green-500 w-full rounded-lg",
            "outline-none focus:ring-8 ring-blue-200",
            "font-semibold font-serif text-2xl text-gray-100 transition-all",

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
    </>
  );
};
