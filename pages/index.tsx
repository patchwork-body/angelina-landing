import { AscentEmailForm } from "../components/ascent-email-form";
import { StickyPostageStamp } from "../components/sticky-postage-stamp";
import { SlideSectionContextProvider } from "../contexes/slide-section";

const Index = () => {
  return (
    <div className="">
      <SlideSectionContextProvider className="grid relative bg-gradient-to-t from-purple-300 via-sky-600/40 to-rose-800/50">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/church.jpg"
          fillColor="#f3f4f4"
        />

        <video className="-z-10 absolute inset-0 min-w-full" autoPlay loop muted poster="">
          <source src="/video.mp4" />
        </video>

        {/* <StickyHeading className="grid gap-y-4 lg:gap-y-8 font-serif font-semibold text-slate-100">
          <span className="text-3xl sm:text-4xl md:text-[3rem] lg:text-[5rem] sm:leading-[1.2]">
            Все еще не говоришь
            <br /> по&nbsp;Английски?
          </span>

          <div className="grid grid-flow-col mx-auto lg:text-3xl text-gray-100">
            <span className="bg-yellow-400/90 px-4 py-2 rounded-full -translate-y-1/4 z-10">
              Don&apos;t worry,{" "}
            </span>

            <span className="bg-sky-500 px-4 py-2 -translate-x-3 rounded-full">
              it will be fun!!!
            </span>
          </div>
        </StickyHeading> */}
      </SlideSectionContextProvider>

      <SlideSectionContextProvider className="bg-gradient-to-t from-yellow-300 via-sky-300-200 to-purple-300">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/big-ben.jpeg"
          fillColor="#f3f4f4"
        />
      </SlideSectionContextProvider>

      <SlideSectionContextProvider className="grid bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-300">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/wheel.jpeg"
          fillColor="#f3f4f4"
        />

        <AscentEmailForm className="absolute place-self-center bottom-0" />
      </SlideSectionContextProvider>
    </div>
  );
};

export default Index;
