import { WelcomeSlide } from "../components/WelcomeSlide";

const Index = () => {
  return (
    <div className="h-screen">
      <video
        className="fixed top-0 left-0 min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        poster=""
      >
        <source src="/video.mp4" />
      </video>

      <WelcomeSlide />

      {/*
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
      </SlideSectionContextProvider> */}
    </div>
  );
};

export default Index;
