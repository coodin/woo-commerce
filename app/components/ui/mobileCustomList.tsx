"use client";
import Line from "@/app/icons/line";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

type MobileCustomListProps = {
  title: string;
  open?: boolean;
  list: { title: string; url: string }[];
  currentMenu: string;
  setCurrentMenu: Dispatch<SetStateAction<string>>;
};

const MobileCustomList: React.FC<MobileCustomListProps> = ({
  title,
  list,
  currentMenu,
  setCurrentMenu,
}) => {
  const open = currentMenu === title;

  return (
    <li className={`relative w-full  text-base mt-4`}>
      <Link
        href={""}
        className="block pt-2 pr-6 pb-2 pl-0 uppercase text-[#212529]
         font-open_sans text-sm hover:text-[#e53e29] transition-all ease-in-out duration-300"
      >
        {title}
      </Link>
      {/* Button */}
      {list.length != 0 && (
        <span
          onClick={() => {
            if (open) {
              setCurrentMenu("");
            } else {
              setCurrentMenu(title);
            }
          }}
          className="absolute flex justify-center items-center z-[2] top-0 right-0 w-6 h-11 cursor-pointer bg-transparent"
        >
          <Line
            width={20}
            height={20}
            className={`absolute  stroke-[#7e7e7e] stroke-2  transition-all duration-500 ease-in-out`}
          />
          <Line
            width={20}
            height={20}
            className={` stroke-[#7e7e7e] stroke-2  ${
              open ? "-rotate-90" : "rotate-0"
            }  transition-all duration-500 ease-in-out`}
          />
        </span>
      )}
      {/* Inner List */}
      {list.length != 0 && (
        <ul
          className={`${
            open ? "h-auto visible opacity-100" : "h-0 invisible opacity-0"
          }  w-full p-0 pl-[15px]  [transition:height_0.3s,visible_0.1s,opacity_0.1s]  ease-linear`}
        >
          {list.map((item) => {
            return (
              <li
                key={item.url}
                className="relative  text-[#212529] group/item mt-4 !leading-[25px]"
              >
                <Link
                  href={item.url}
                  className={`group-hover/item:text-[#e53e29] text-sm transition-all ease-in-out duration-300 font-open_sans`}
                >
                  {" "}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default MobileCustomList;
