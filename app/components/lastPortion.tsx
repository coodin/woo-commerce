"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

import ProfileSvg from "../icons/profile";
import SearchSvg from "../icons/search";
import CloseSvg from "../icons/close";
import HamburgerSvg from "../icons/hamburger";

type LastPortionProps = {
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const LastPortion: React.FC<LastPortionProps> = ({ setOpenMobileMenu }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-end px-3 space-x-2.5">
      <div className=" ">
        <div
          onClick={() => {
            setOpen((state) => !state);
          }}
          className="relative flex group items-center  justify-center 
        h-[50px] w-[50px] leading-[50px] hover:bg-[#e53e29] 
        transition duration-300 ease-in-out bg-white text-center cursor-pointer"
        >
          {open ? (
            <CloseSvg
              width={30}
              height={30}
              className="group-hover:stroke-white  stroke-[#071c1f]"
            />
          ) : (
            <SearchSvg
              className="group-hover:fill-white fill-[#071c1f]"
              width={16}
              height={16}
            />
          )}
          {/* Open Close Section */}
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`${
              open ? "h-[90px]" : "h-0"
            } absolute right-0 top-[130%] transition-[height] duration-[0.4] w-[320px]
            bg-white shadow-search mr-0 overflow-hidden  cursor-default z-[999]`}
          >
            <form className="relative mx-[15px] mt-[15px]">
              <input
                placeholder="Search here..."
                className=" py-[1px] pr-[50px] pl-[20px] h-[60px] border-[2px] border-solid border-[#e4ecf2]
               bg-white text-base text-[#071c1f] w-full mb-[30px] rounded-none font-open_sans 
               focus:border-[#e53e29] focus:outline-none focus:border-[1px]"
              />
              <button
                className="block text-lg h-[60px] leading-[48px] absolute right-2 text-center top-0 
              py-[1px] px-[6px]"
              >
                <SearchSvg
                  className=" fill-[#071c1f] "
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="relative flex group/parent items-center justify-center  
      h-[50px] w-[50px] leading-[50px] hover:bg-[#e53e29]
      transition duration-300 ease-in-out bg-white text-center cursor-pointer"
      >
        <ProfileSvg
          className="group-hover/parent:fill-white fill-[#071c1f] cursor-pointer"
          width={16}
          height={16}
        />
        {/* Open Close Section */}
        <ul
          className="absolute right-0 top-[130%]  min-w-[150px] py-[10px] opacity-0 invisible 
          group-hover/parent:top-full group-hover/parent:opacity-100 group-hover/parent:visible bg-white  border-t border-solid 
          border-[#ececec] transition-all duration-300 ease-in-out z-[999] leading-[27px]"
        >
          <li className="block py-[5px] px-[15px] text-[15px] text-left font-medium group/item">
            <Link
              href={""}
              className="group-hover/item:text-[#e53e29] font-open_sans text-[15px] transition-all duration-300 ease-in-out text-black"
            >
              Sign in
            </Link>
          </li>
          <li className="block py-[5px] px-[15px] text-[15px] text-left font-medium group/item">
            <Link
              href={""}
              className="group-hover/item:text-[#e53e29] font-open_sans text-[15px] transition-all duration-300 ease-in-out text-black"
            >
              Register
            </Link>
          </li>
          <li className="block py-[5px] px-[15px] text-[15px] text-left font-medium group/item">
            <Link
              href={""}
              className="group-hover/item:text-[#e53e29] font-open_sans text-[15px] transition-all duration-300 ease-in-out text-black"
            >
              My Account
            </Link>
          </li>
          <li className="block py-[5px] px-[15px] text-[15px] text-left font-medium group/item">
            <Link
              href={""}
              className="group-hover/item:text-[#e53e29] font-open_sans text-[15px] transition-all duration-300 ease-in-out text-black"
            >
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={() => {
          setOpenMobileMenu((state) => !state);
        }}
        className="flex justify-center items-center h-[50px] w-[50px] bg-white cursor-pointer min-[1200px]:hidden"
      >
        <HamburgerSvg width={30} height={30} stroke="#333" />
      </div>
    </div>
  );
};

export default LastPortion;
