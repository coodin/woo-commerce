"use client";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Intermediate from "./intermediate";
import Logo from "./logo";

type HeaderProps = {
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
  appointmentRef: RefObject<HTMLDialogElement>;
};

const Header: React.FC<HeaderProps> = ({
  setOpenMobileMenu,
  appointmentRef,
}) => {
  const [mount, setMount] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);

  const handleResize = (event: Event) => {
    setScrollDistance(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }
  return (
    <header className="absolute w-full  leading-[1.8] z-50">
      <div
        className={`${
          scrollDistance > 550
            ? `min-[991px]:fixed top-0 left-0 z-[999]
            shadow-[0_10px_50px_0_rgba(46,56,220,0.2)] py-[10px] bg-[#071c1f] animate-feadeInDown`
            : "py-[22px]"
        }
        flex absolute  px-[15px]  w-full items-center justify-between flex-col min-[767px]:flex-row `}
      >
        <Logo />
        <Intermediate appointmentRef={appointmentRef} />
        {/* <LastPortion setOpenMobileMenu={setOpenMobileMenu} /> */}
      </div>
    </header>
  );
};

export default Header;
