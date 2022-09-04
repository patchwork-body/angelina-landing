import { Logo } from "components/Logo";
import { HamburgerButton } from "components/Header/components/HamburgerButton";
import { DesktopMenu } from "components/Header/components/DesktopMenu";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import classNames from "classnames";
import { MobileMenu } from "./components/MobileMenu";
import { SocialLinks } from "components/SocialLinks";
const headerAttachedClassName = styles["header-attached"] as string;

export const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpened, setOpened] = useState(false);

  const toggleMobileMenu: MouseEventHandler<HTMLButtonElement> = () => {
    setOpened(prev => !prev);
  };

  useEffect(() => {
    if (anchorRef.current === null) {
      return;
    }

    const target = anchorRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio <= 0.9) {
            headerRef.current?.classList.add(headerAttachedClassName);
          } else if (!isMobileMenuOpened) {
            headerRef.current?.classList.remove(headerAttachedClassName);
          }
        });
      },

      {
        rootMargin: "0px",
        threshold: [0.9],
      },
    );

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [isMobileMenuOpened]);

  return (
    <>
      <div ref={anchorRef} className="absolute top-0 w-full h-1"></div>

      <header
        ref={headerRef}
        className={classNames("z-50 fixed top-0 w-full p-2 md:p-5 transition-backdrop/shadow", {
          "backdrop-blur-xs": isMobileMenuOpened,
        })}
      >
        <div className="grid grid-cols-1fr/auto items-center">
          <Logo />
          <DesktopMenu className="hidden sm:grid" />

          <HamburgerButton
            className="sm:hidden"
            opened={isMobileMenuOpened}
            toggleMenu={toggleMobileMenu}
          />
        </div>

        <MobileMenu opened={isMobileMenuOpened} />
      </header>

      <div className="hidden sm:block fixed left-0 p-4 rounded-r-lg top-1/2 -translate-y-1/2 z-50 hover:backdrop-blur-xs hover:shadow-main transition-backdrop/shadow">
        <SocialLinks vertical />
      </div>
    </>
  );
};
