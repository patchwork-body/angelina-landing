import { MoveToButtomButton } from "../components/MoveToButtomButton";
import { StickyPostageStamp } from "../components/StickyPostageStamp";
import { AscentEmailForm } from "../components/AscentEmailForm";
import { SlideSectionContextProvider } from "../contexes/SlideSection";

const Index = () => {
  return (
    <div className="relative">
      <header className="fixed top-0 w-screen bg-transparent grid place-items-end p-5">
        <a
          className="text-slate-100 hover:text-[#0077ff] transition-colors cursor-pointer"
          target="_blank"
          href="https://vk.com/"
          rel="noopener noreferrer"
        >
          <svg
            fill="none"
            viewBox="0 0 49 48"
            height="48"
            width="49"
            xmlns="http://www.w3.org/2000/svg"
            transform="scale(0.7)"
          >
            <path
              clipRule="evenodd"
              d="M3.87 3.37C.5 6.75.5 12.17.5 23.04v1.92c0 10.86 0 16.3 3.37 19.67C7.25 48 12.67 48 23.54 48h1.92c10.86 0 16.3 0 19.67-3.37 3.37-3.38 3.37-8.8 3.37-19.67v-1.92c0-10.86 0-16.3-3.37-19.67C41.75 0 36.33 0 25.46 0h-1.92C12.68 0 7.24 0 3.87 3.37zm4.74 11.3c.25 12.48 6.82 20 17.65 20h.63v-7.15c3.95.4 6.89 3.35 8.09 7.15h5.69a15.8 15.8 0 00-8.03-10.03c2.48-1.49 6-5.09 6.83-9.97h-5.18c-1.08 3.97-4.31 7.57-7.4 7.91v-7.91h-5.26v13.85c-3.2-.8-7.37-4.68-7.54-13.85z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </header>

      <SlideSectionContextProvider className="bg-gradient-to-t from-sky-200 via-sky-600/60 to-rose-800/70">
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
          className="absolute left-[5%] hidden md:block drop-shadow-lg"
          bgImageHref="/church.jpg"
          fillColor="#f3f4f4"
        />

        <div className="grid grid-rows-2 place-items-center font-serif font-semibold text-slate-100 text-center">
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

          <div className="grid grid-rows-[auto,1fr] w-full h-full">
            <div className="grid grid-flow-col auto-cols-auto justify-self-end mr-[5%] sm:mr-[15%] md:mr-[20%] mt-[5%]">
              <span className="px-3 py-2 rounded-full bg-slate-50 ring-1 ring-slate-700 text-slate-700 -translate-y-14 translate-x-3 font-serif font-semibold">
                Really…?
              </span>

              <span className="w-4 h-4 -translate-y-4 rounded-full bg-slate-50 ring-1 ring-slate-700" />
              <span className="w-2 h-2 rounded-full bg-slate-50 ring-1 ring-slate-700" />

              <span className="text-4xl translate-y-2">🤔</span>
            </div>

            <MoveToButtomButton className="m-auto">Начать Учиться!</MoveToButtomButton>
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

      <SlideSectionContextProvider className="bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-300">
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
