import { SlideSectionContextProvider } from "../../contexes/SlideSection";
import { MoveToButtomButton } from "../MoveToButtomButton";
import { StickyPostageStamp } from "../StickyPostageStamp";

export const WelcomeSlide = () => {
  return (
    <SlideSectionContextProvider className="relative grid bg-gradient-to-t from-purple-300 via-sky-600/40 to-rose-800/50">
      <StickyPostageStamp
        className="absolute left-[5%] hidden md:block drop-shadow-lg"
        bgImageHref="/church.jpg"
        fillColor="#f3f4f4"
      />

      <div className="grid grid-flow-row place-items-center font-serif font-semibold text-slate-100 text-center">
        <div className="grid grid-flow-row gap-y-6">
          <h1 className="text-2xl xs:text-4xl sm:text-[3.5rem] md:text-[5rem] leading-[1.15]">
            Все еще не говоришь
            <br /> по&nbsp;Английски?
          </h1>

          <div className="grid grid-flow-col m-auto auto-cols-max md:text-2xl">
            <span className="bg-yellow-400/90 px-4 py-2 rounded-full -translate-y-1/4 z-10">
              Don&apos;t worry,{" "}
            </span>

            <span className="bg-sky-500 px-4 py-2 -translate-x-3 rounded-full">
              it will be fun!!!
            </span>
          </div>
        </div>

        <MoveToButtomButton />
      </div>
    </SlideSectionContextProvider>
  );
};
