import { AscentEmailInput } from "../components/ascent-email-input";
import { StickyHeading } from "../components/sticky-heading";
import { StickyPostageStamp } from "../components/sticky-postage-stamp";
import { StickySlideContextProvider } from "../contexes/sticky-slide";

const Index = () => {
  return (
    <div className="relative">
      <StickySlideContextProvider className="bg-pink-100">
        <StickyPostageStamp
          className="absolute left-52 hidden md:block drop-shadow-lg"
          bgImageHref="/church.jpg"
          fillColor="#fff"
        />

        <StickyHeading>Заголовок #2</StickyHeading>
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-slate-300">
        <StickyPostageStamp
          className="absolute left-52 hidden md:block drop-shadow-lg"
          bgImageHref="/bridge.jpeg"
          fillColor="#fff"
        />

        <StickyHeading>Заголовок #3</StickyHeading>
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-yellow-200">
        <StickyPostageStamp
          className="absolute left-52 hidden md:block drop-shadow-lg"
          bgImageHref="/wheel.jpeg"
          fillColor="#fff"
        />

        <StickyHeading>Заголовок #4</StickyHeading>
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-yellow-200 grid place-items-center">
        <StickyPostageStamp
          className="absolute left-52 hidden md:block drop-shadow-lg"
          bgImageHref="/wheel.jpeg"
          fillColor="#fff"
        />

        <StickyHeading>Заголовок #4</StickyHeading>
        <AscentEmailInput />
      </StickySlideContextProvider>
    </div>
  );
};

export default Index;
