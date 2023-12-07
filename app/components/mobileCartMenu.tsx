import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import CloseSvg from "../icons/close";
import SearchSvg from "../icons/search";
import MobileCustomList from "./ui/mobileCustomList";
import ProfileSvg from "../icons/profile";
import HeartSvg from "../icons/heart";
import FacebookSvg from "../icons/facebook";
import TwitterSvg from "../icons/twitter";
import LinkedinSvg from "../icons/linkedin";
import InstagramSvg from "../icons/instagram";

type HeaderProps = {
  openMobileMenu: boolean;
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const MobileCartMenu: React.FC<HeaderProps> = ({
  openMobileMenu,
  setOpenMobileMenu,
}) => {
  const [currentMenu, setCurrentMenu] = useState("");

  return (
    <div
      className={`fixed left-0 top-0 overflow-hidden h-full  w-[400px] bg-white  py-[50px] px-[40px]
      -translate-x-full ${
        openMobileMenu ? "translate-x-0" : ""
      } transition-all duration-300 ease-in-out z-[99999]`}
    >
      <div className="relative flex flex-col h-full  touch-auto overflow-y-auto overflow-x-hidden pr-5 z-10">
        {/* Menu Head */}
        <div
          className="flex  justify-between items-center pb-[15px] mb-[25px] 
        border-b-[1px] border-solid border-[#eee] h-min"
        >
          {/* Logo */}
          <div className="max-w-[100px] min-[767px]:max-w-[180px] h-full flex items-center">
            <Link href={""} className="">
              <img src={"/Silber.png"} className="max-w-full align-middle" />
            </Link>
          </div>
          {/* Close Button */}
          <button
            onClick={() => {
              setOpenMobileMenu((state) => !state);
            }}
            className="py-0 px-[15px] h-full"
          >
            <CloseSvg width={30} height={30} className="  stroke-[#071c1f]" />
          </button>
        </div>
        {/* Search Section */}
        <div className="relative mb-[30px] h-min">
          <form className="">
            <input
              type="text"
              placeholder="Search..."
              className="mb-0 bg-white w-full h-[65px] outline-none  border-[2px] border-solid border-[#e4ecf2] pl-5 pr-[40px]
               text-base text-[#071c1f]  rounded-none font-open_sans focus:border-[#e53e29] focus:border-[1px]"
            />
            <button className="absolute top-[50%] right-0  h-full  bg-transparent -translate-y-[50%] py-0 px-[15px]">
              <SearchSvg
                className="stroke-[#071c1f] stroke-2"
                width={16}
                height={16}
              />
            </button>
          </form>
        </div>
        {/* Menu Section */}
        <div className="h-min">
          <ul className="">
            <MobileCustomList
              title="Home"
              list={[
                { title: "Home Style 01", url: "1" },
                { title: "Home Style 02", url: "2" },
                { title: "Home Style 03", url: "3" },
                { title: "Home Style 04", url: "4" },
                { title: "Home Style 05", url: "5" },
                { title: "Home Style 06", url: "6" },
                { title: "Home Style 07", url: "7" },
                { title: "Home Style 08", url: "8" },
                { title: "Home Style 09", url: "9" },
                { title: "Home Style 10", url: "10" },
                { title: "Home Style 11", url: "11" },
                { title: "Home Style 12", url: "12" },
                { title: "Home Style 13", url: "13" },
                { title: "Home Style 14", url: "14" },
                { title: "Home Style 15", url: "15" },
                { title: "Home Style 16", url: "16" },
              ]}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
            <MobileCustomList
              title="About"
              list={[
                { title: "About", url: "1" },
                { title: "Services", url: "2" },
                { title: "Service Details", url: "3" },
                { title: "Portfolio", url: "4" },
                { title: "Portfolio - 02", url: "5" },
                { title: "Portfolio Details", url: "6" },
                { title: "Team", url: "7" },
                { title: "Team Details", url: "8" },
                { title: "FAQ", url: "9" },
                { title: "Google Map Locations", url: "10" },
              ]}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
            <MobileCustomList
              title="Shop"
              list={[
                { title: "Shop", url: "1" },
                { title: "Shop Grid", url: "2" },
                { title: "Shop Left sidebar", url: "3" },
                { title: "Shop Right sidebar", url: "4" },
                { title: "Shop Details", url: "5" },
                { title: "Shop Details 02", url: "6" },
                { title: "Shop Card Grid", url: "7" },
                { title: "Shop Card Left sidebar", url: "8" },
                { title: "Shop Card Right sidebar", url: "9" },
                { title: "Shop Cart Details", url: "10" },
                { title: "Cart", url: "11" },
                { title: "Wishlist", url: "12" },
                { title: "Chekout", url: "13" },
                { title: "Order Tracking", url: "14" },
                { title: "My Account", url: "15" },
                { title: "Sign in", url: "16" },
                { title: "Register", url: "17" },
              ]}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
            <MobileCustomList
              title="News"
              list={[
                { title: "News", url: "1" },
                { title: "News Grid", url: "2" },
                { title: "News Left sidebar", url: "3" },
                { title: "News Right sidebar", url: "4" },
                { title: "New Details", url: "5" },
              ]}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
            <MobileCustomList
              title="Pages"
              list={[
                { title: "About", url: "1" },
                { title: "Services", url: "2" },
                { title: "Service Details", url: "3" },
                { title: "Portfolio", url: "4" },
                { title: "Portfolio 02", url: "5" },
                { title: "Portfolio Details", url: "6" },
                { title: "Team", url: "7" },
                { title: "Team Details", url: "8" },
                { title: "FAQ", url: "9" },
                { title: "History", url: "10" },
                { title: "Appointments", url: "11" },
                { title: "Google Map Locations", url: "12" },
                { title: "404", url: "13" },
                { title: "Contact", url: "14" },
                { title: "Coming Soon", url: "15" },
              ]}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
            <MobileCustomList
              title="Contact"
              list={[]}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
          </ul>
        </div>
        {/* Menu Buttons */}
        <div className="h-min border-b border-t border-solid border-[#e5eaee] pt-[5px] px-0 pb-5  my-[30px] mx-0">
          <ul className="">
            <li className="mt-4 group">
              <Link
                href={""}
                className="flex items-center text-[#071c1f] font-open_sans group-hover:text-[#e53e29] 
                transition-all ease-in-out duration-300 text-sm"
              >
                <span
                  className="flex items-center justify-center h-[50px] w-[50px]  border-[2px] border-solid border-[#e5eaee]
                 leading-[46px] text-center mr-[10px]"
                >
                  <ProfileSvg
                    className="group-hover:fill-[#e53e29] fill-[#071c1f] cursor-pointer
                     transition-all ease-in-out duration-300"
                    width={16}
                    height={16}
                  />
                </span>
                My Account
              </Link>
            </li>
            <li className="mt-4 group">
              <Link
                href={""}
                className="flex items-center text-[#071c1f] font-open_sans group-hover:text-[#e53e29] 
                transition-all ease-in-out duration-300 text-sm"
              >
                <span
                  className="flex items-center justify-center h-[50px] w-[50px]  border-[2px] border-solid border-[#e5eaee]
                 leading-[46px] text-center mr-[10px]"
                >
                  <HeartSvg
                    className="group-hover:fill-[#e53e29] fill-[#071c1f] cursor-pointer
                     transition-all ease-in-out duration-300"
                    width={26}
                    height={26}
                  />
                </span>
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Buttons */}
        <div className="h-min">
          <ul className="">
            <li className="inline-block mt-4 mr-[10px] group">
              <Link
                href={""}
                className="flex items-center justify-center w-[40px] h-[40px]  text-center
                 bg-[#F2F6F7] group-hover:bg-[#e53e29] 
                 transition-all ease-in-out duration-300"
              >
                <FacebookSvg
                  width={20}
                  height={20}
                  className="group-hover:fill-white transition-all ease-in-out duration-300"
                />
              </Link>
            </li>
            <li className="inline-block mt-4 mr-[10px] group">
              <Link
                href={""}
                className="flex items-center justify-center w-[40px] h-[40px]  text-center
                 bg-[#F2F6F7] group-hover:bg-[#e53e29] 
                 transition-all ease-in-out duration-300"
              >
                <TwitterSvg
                  width={18}
                  height={18}
                  className="group-hover:fill-white transition-all ease-in-out duration-300"
                />
              </Link>
            </li>
            <li className="inline-block mt-4 mr-[10px] group">
              <Link
                href={""}
                className="flex items-center justify-center w-[40px] h-[40px]  text-center
                 bg-[#F2F6F7] group-hover:bg-[#e53e29] 
                 transition-all ease-in-out duration-300"
              >
                <LinkedinSvg
                  width={20}
                  height={20}
                  className="group-hover:fill-white transition-all ease-in-out duration-300"
                />
              </Link>
            </li>
            <li className="inline-block mt-4 mr-[10px] group">
              <Link
                href={""}
                className="flex items-center justify-center w-[40px] h-[40px]  text-center
                 bg-[#F2F6F7] group-hover:bg-[#e53e29] 
                 transition-all ease-in-out duration-300"
              >
                <InstagramSvg
                  width={24}
                  height={24}
                  className="group-hover:fill-white transition-all ease-in-out duration-300"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileCartMenu;
