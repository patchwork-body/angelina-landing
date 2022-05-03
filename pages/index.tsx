import Image from "next/image";

import { AscentEmailForm } from "../components/ascent-email-form";
import { MoveToButtomButton } from "../components/move-to-bottom-button";
import { StickyHeading } from "../components/sticky-heading";
import { StickyPostageStamp } from "../components/sticky-postage-stamp";
import { StickySlideContextProvider } from "../contexes/sticky-slide";

const Index = () => {
  return (
    <div className="relative">
      <div className="fixed h-screen w-screen">
        <Image src="/bg.jpeg" layout="fill" alt="" />
      </div>

      <StickySlideContextProvider className="bg-gradient-to-t from-rose-500 to-rose-500/30 grid">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/church.jpg"
          fillColor="#f3f4f4"
        />

        <StickyHeading className="grid gap-y-4 lg:gap-y-8 font-serif font-semibold text-gray-100">
          <span className="text-2xl sm:text-4xl md:text-[3rem] lg:text-[5rem] sm:leading-[1.2]">
            Все еще не говоришь
            <br /> по&nbsp;Английски?
          </span>

          <div className="grid grid-flow-col mx-auto lg:text-3xl">
            <span className="bg-yellow-400/90 px-4 py-2 rounded-full -translate-y-1/4 z-10">
              Don&apos;t worry,{" "}
            </span>

            <span className="bg-sky-500 px-4 py-2 -translate-x-3 rounded-full">
              it will be fun!!!
            </span>
          </div>
        </StickyHeading>

        <MoveToButtomButton />
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-purple-300">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/big-ben.jpeg"
          fillColor="#f3f4f4"
        />

        <StickyHeading>Заголовок #3</StickyHeading>
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-yellow-200">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/wheel.jpeg"
          fillColor="#f3f4f4"
        />

        <StickyHeading>Заголовок #4</StickyHeading>
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-yellow-200 grid place-items-center">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/wheel.jpeg"
          fillColor="#f3f4f4"
        />

        <StickyHeading>Заголовок #4</StickyHeading>
        <AscentEmailForm />
      </StickySlideContextProvider>
    </div>
  );
};

export default Index;
