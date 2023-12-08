import { Dispatch, SetStateAction } from "react";
import Intermediate from "./intermediate";
import LastPortion from "./lastPortion";
import Logo from "./logo";

type HeaderProps = {
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setOpenMobileMenu }) => {
  return (
    <header className="absolute w-full py-[22px] px-[16px] leading-[1.8] z-50 ">
      <div className="flex relative px-[15px] w-full items-center justify-between flex-col min-[767px]:flex-row ">
        <Logo />
        <Intermediate />
        <LastPortion setOpenMobileMenu={setOpenMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
