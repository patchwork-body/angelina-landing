import Image from "next/image";

import { AscentEmailForm } from "../components/ascent-email-form";
import { StickyHeading } from "../components/sticky-heading";
import { StickyPostageStamp } from "../components/sticky-postage-stamp";
import { StickySlideContextProvider } from "../contexes/sticky-slide";

const Index = () => {
  return (
    <div className="relative">
      <div className="fixed h-screen w-screen">
        <Image src="/bg.jpeg" width="1920" height="1200" layout="fill" alt="" />
      </div>

      <StickySlideContextProvider className="bg-gradient-to-t from-rose-500 to-rose-500/30">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/church.jpg"
          fillColor="#fff"
        />

        <StickyHeading className="text-gray-50">
          <span className="text-[3rem] leading-10">Все еще не говоришь по Английски?</span>

          <div className="relative mt-5">
            <span className="absolute z-10 top-2 left-[33%] bg-yellow-300/90 rounded-full leading-10 px-8 py-4">
              Don&apos;t worry,{" "}
            </span>

            <span className="absolute top-8 left-[47%] bg-blue-300 rounded-full ml-4 px-10 py-4">
              it will be fun!!!
            </span>
          </div>
        </StickyHeading>

        <span className="animate-appearance absolute bottom-0 left-0 mb-20 ml-20 text-gray-100 font-serif font-semibold text-4xl">
          Запишись
          <br />
          на свой первый урок
        </span>
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
