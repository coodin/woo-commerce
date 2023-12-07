import { Dispatch, SetStateAction } from "react";
import Intermediate from "./intermediate";
import LastPortion from "./lastPortion";
import Logo from "./logo";

type HeaderProps = {
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setOpenMobileMenu }) => {
  return (
    <header className="absolute w-full py-[22px] px-[16px] leading-[1.8]  ">
      <div className="flex relative px-[15px] w-full items-center justify-between ">
        <Logo />
        <Intermediate />
        <LastPortion setOpenMobileMenu={setOpenMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
