import { MoveToButtomButton } from "../components/MoveToButtomButton";
import { StickyPostageStamp } from "../components/StickyPostageStamp";
import { AscentEmailForm } from "../components/AscentEmailForm";
import { SlideSectionContextProvider } from "../contexes/SlideSection";
import { VkLink } from "../components/VkLink";
import { Comics } from "../components/Comics";

const Index = () => {
  return (
    <div className="relative">
      <header className="z-50 fixed top-0 w-screen">
        <div className="max-w-[1000px] mx-auto grid place-items-end px-3">
          <VkLink className="text-slate-100 hover:text-[#0077ff] transition-colors" />
        </div>
      </header>

      <SlideSectionContextProvider className="bg-gradient-to-t from-sky-500/50 to-rose-800/70">
        <video
          className="-z-10 fixed top-0 left-0 min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
          poster="/video-placeholder.jpg"
        >
          <source src="/video.mp4" />
        </video>

        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg opacity-75 animate-appearance-75"
          bgImageHref="/church.jpg"
          fillColor="#f3f4f4"
        />

        <div className="grid grid-rows-[2fr,3fr] place-items-center font-serif font-semibold text-slate-100 text-center">
          <div className="grid grid-flow-row gap-y-6 animate-appearance">
            <h1 className="text-2xl xs:text-4xl sm:text-[3.5rem] md:text-[5rem] leading-[1.15]">
              Все еще не говоришь
              <br /> по&nbsp;Английски?
            </h1>

            <div className="grid grid-flow-col m-auto auto-cols-max text-sm md:text-xl">
              <span className="z-10 bg-yellow-400/90 px-4 py-2 rounded-full -translate-y-1/4">
                Don&apos;t worry,{" "}
              </span>

              <span className="bg-sky-500 px-4 py-2 -translate-x-3 rounded-full">
                it will be fun!!!
              </span>
            </div>
          </div>

          <div className="grid grid-rows-[auto,1fr] w-full h-full">
            <div className="grid grid-rows-3 max-w-[400px] min-w-[320px] mt-10 mx-auto">
              <Comics />
            </div>

            <MoveToButtomButton className="m-auto animate-appearance">
              Начать Учиться!
            </MoveToButtomButton>
          </div>
        </div>
      </SlideSectionContextProvider>

      {/*
      <SlideSectionContextProvider className="bg-gradient-to-t from-yellow-300 via-sky-300-200 to-purple-300">
        <StickyPostageStamp
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/big-ben.jpeg"
          fillColor="#f3f4f4"
        />

        <BulletList />
      </SlideSectionContextProvider> */}

      <SlideSectionContextProvider className="bg-gradient-to-t from-yellow-400/30 to-sky-500/50">
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
