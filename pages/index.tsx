import { MoveToButtomButton } from "../components/MoveToButtomButton";
import { StickyPostageStamp } from "../components/StickyPostageStamp";
import { AscentEmailForm } from "../components/AscentEmailForm";
import { SlideSectionContextProvider } from "../contexes/SlideSection";
import { VkLink } from "../components/VkLink";
import { Comics } from "../components/Comics";
import { ModalWindowContextProvider } from "../contexes/ModalWindow";
import { HamburgerButton } from "components/HamburgerIcon";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Logo } from "components/Logo";
import { MobileMenu } from "components/Header/components/HamburgerButton";
import { Header } from "components/Header";
import Image from "next/image";

const Index = () => {
  return (
    <div className="relative">
      <ModalWindowContextProvider>
        <Header />

        <div className="pt-20 primary-gradient">
          <div className="grid grid-cols-3/2">
            <div className="grid grid-flow-row auto-rows-fr items-center">
              <h1 className="font-serif-alternate font-bold text-white sm:text-clip text-xl text-center drop-shadow-main">
                Все еще не говоришь
                <br /> по&nbsp;Английски?
              </h1>

              <MoveToButtomButton className="hover:scale-110 hover:shadow-main transition-transform/shadow">
                Начать учиться!
              </MoveToButtomButton>
            </div>

            <Image
              priority
              src="/angel.png"
              alt="teacher's image"
              width={1000}
              height={1200}
              layout="responsive"
            />
          </div>
        </div>

        <SlideSectionContextProvider className="bg-selective-yellow">
          <div className="grid place-items-start">awesome</div>
        </SlideSectionContextProvider>
      </ModalWindowContextProvider>
    </div>
  );
};

export default Index;
