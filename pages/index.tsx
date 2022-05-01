import { StickyHeading } from "../components/sticky-heading";
import { StickyPostageStamp } from "../components/sticky-postage-stamp";
import { StickySlideContextProvider } from "../contexes/sticky-slide";

const Index = () => {
  return (
    <div className="relative">
      <StickySlideContextProvider className="bg-pink-100">
        <StickyPostageStamp bgImageHref="/big-ben.jpeg" fillColor="#fff" />
        <StickyHeading>Заголовок #2</StickyHeading>
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-slate-300">
        <StickyPostageStamp bgImageHref="/bridge.jpeg" fillColor="#fff" />
        <StickyHeading>Заголовок #3</StickyHeading>
      </StickySlideContextProvider>

      <StickySlideContextProvider className="bg-yellow-200">
        <StickyPostageStamp bgImageHref="/wheel.jpeg" fillColor="#fff" />
        <StickyHeading>Заголовок #4</StickyHeading>
      </StickySlideContextProvider>
    </div>
  );
};

export default Index;
