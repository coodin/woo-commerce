"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Arrow from "./Arrow";
import PrevSvg from "@/app/icons/prev";
import NextSvg from "@/app/icons/next";
import Link from "next/link";
import EyeSvg from "@/app/icons/eye";
import BasketSvg from "@/app/icons/basket";
import FavoriteSvg from "@/app/icons/favorite";
import { formatter } from "@/lib/utils";
import CarSvg from "@/app/icons/car";
import SettingsVariationSvg from "@/app/icons/settingsVariation";
import HightWaySvg from "@/app/icons/highWay";

type CarsProps = {
  carsTab: "newCars" | "oldCars";
  realTab: "newCars" | "oldCars";
  data: {
    title: string;
    price: number;
    fromPrice: number;
    img: string;
    year: number;
    auto: boolean;
    kph: number;
  }[];
};

const Cars: React.FC<CarsProps> = ({ carsTab, realTab, data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [state, setState] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setActiveDotIndex(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setState(true);
  }, []);
  if (!state) {
    return null;
  }
  return (
    <div
      className={`block h-0 max-w-full invisible overflow-hidden opacity-0 
        transition-opacity  duration-[150ms] ease-linear ${
          carsTab === realTab
            ? "h-auto  !visible opacity-100 overflow-visible"
            : ""
        }`}
    >
      <div className="">
        <div className="relative block mx-[-8px]">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative block   group/first"
          >
            <Slider
              dots={true}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              initialSlide={0}
              afterChange={handleDotClick}
              appendDots={(dots) => (
                <ul
                  style={{
                    position: "static",
                    display: window.innerWidth > 990 ? "none" : "block",
                    marginBottom: window.innerWidth > 760 ? 30 : 15,
                    width: "100%",
                    maxWidth: "100%",
                    padding: 0,
                    textAlign: "center",
                    lineHeight: 1,
                  }}
                >
                  {dots}
                </ul>
              )}
              customPaging={(index) => {
                return (
                  <div
                    style={{
                      backgroundColor:
                        activeDotIndex == index ? "#e53e29" : "#C0C0C0",
                      display: "inline-block",
                      height: 10,
                      width: 10,
                      borderRadius: 9999,
                      cursor: "pointer",
                    }}
                  ></div>
                );
              }}
              prevArrow={
                <Arrow
                  myStyle={{
                    left:
                      window.innerWidth > 1260 && isHovered ? "-50px" : "10px",
                    right: "auto",
                  }}
                >
                  <PrevSvg
                    className="fill-[#071c1f] -rotate-180 group-hover/arrow:fill-white
                    absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5 h-5
                    transition-all duration-300 ease-in-out"
                  />
                </Arrow>
              }
              nextArrow={
                <Arrow
                  myStyle={{
                    left: "auto",
                    right:
                      window.innerWidth > 1260 && isHovered ? "-50px" : "10px",
                  }}
                >
                  <NextSvg
                    className="fill-[#071c1f] absolute  group-hover/arrow:fill-white
                      top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5 h-5
                     transition-all duration-300 ease-in-out"
                  />
                </Arrow>
              }
              responsive={[
                {
                  breakpoint: 990,
                  settings: {
                    dots: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    prevArrow: undefined,
                    nextArrow: undefined,
                  },
                },
                {
                  breakpoint: 1182,
                  settings: {
                    dots: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                  },
                },
              ]}
            >
              {data.map((item, index) => {
                return (
                  <div key={index} className="block px-2">
                    <div
                      className="relative border-[2px] border-solid border-[#f6f6f6]
                      transition-all duration-300 ease-in-out mb-[50px] 
                      hover:shadow-[0_16px_32px_0_rgba(7,28,31,0.1)] group/parent"
                    >
                      <div className="relative overflow-hidden">
                        <Link href={""} className="">
                          <img
                            className="relative duration-[3.5s] ease-in-out -z-[1]"
                            src={item.img}
                          />
                        </Link>
                        {/* Hidden Content */}
                        <div
                          className="flex justify-center items-center absolute top-[60%] left-0 right-0 text-center
                          translate-y-[-50%] opacity-0 invisible
                           transition-all duration-300 ease-in-out
                           group-hover/parent:top-[70%] group-hover/parent:opacity-100 group-hover/parent:visible"
                        >
                          <ul className="shadow-[0_1px_6px_0_rgba(32,33,36,.28)] flex ">
                            {/* Eye */}
                            <li
                              className="h-[35px] w-[35px] leading-[35px] text-[13px] text-center
                               border-solid border-[#d1dae0] border-r 
                              min-[576px]:h-[50px] min-[576px]:w-[50px] min-[576px]:leading-[50px]
                                transition-all duration-300 ease-in-out group/item"
                            >
                              <Link
                                href={""}
                                className="flex justify-center items-center w-full h-full font-bold 
                                   bg-white group-hover/item:bg-[#e53e29]  transition-all duration-300 ease-in-out"
                              >
                                <EyeSvg
                                  className="stroke-[#071c1f] stroke-2 min-[576px]:stroke-[1.5] w-[15px] h-[15px] min-[576px]:w-[25px] min-[576px]:h-[25px] group-hover/item:stroke-white
                                   transition-all duration-300 ease-in-out"
                                />
                              </Link>
                            </li>
                            {/* Basket */}
                            <li
                              className="h-[35px] w-[35px] leading-[35px] text-[13px] text-center
                               border-r border-solid border-[#d1dae0]
                              min-[576px]:h-[50px] min-[576px]:w-[50px] min-[576px]:leading-[50px]
                              transition-all duration-300 ease-in-out group/item"
                            >
                              <Link
                                href={""}
                                className="flex justify-center items-center w-full h-full font-bold bg-white 
                                  group-hover/item:bg-[#e53e29]  transition-all duration-300 ease-in-out"
                              >
                                <BasketSvg
                                  className="stroke-[#071c1f] stroke-2 min-[576px]:stroke-[1.5] w-[15px] h-[15px] min-[576px]:w-[25px] min-[576px]:h-[25px] group-hover/item:stroke-white
                                  transition-all duration-300 ease-in-out "
                                />
                              </Link>
                            </li>
                            {/* Favorite */}
                            <li
                              className="h-[35px] w-[35px] leading-[35px] text-[13px] text-center
                              border-r border-solid border-[#d1dae0]
                              min-[576px]:h-[50px] min-[576px]:w-[50px] min-[576px]:leading-[50px]
                                transition-all duration-300 ease-in-out group/item"
                            >
                              <Link
                                href={""}
                                className="flex justify-center items-center w-full h-full font-bold bg-white
                                   group-hover/item:bg-[#e53e29]  transition-all duration-300 ease-in-out"
                              >
                                <FavoriteSvg
                                  className="stroke-[#071c1f] group-hover/item:stroke-white
                                     stroke-2 min-[576px]:stroke-[1.5]
                                      w-[15px] h-[15px] min-[576px]:w-[25px] min-[576px]:h-[25px]
                                     transition-all duration-300 ease-in-out"
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="px-[5px] pt-[25px] pb-[15px] text-center">
                        <h2 className="text-sm text-[#071c1f] font-bold">
                          <Link className="" href={""}>
                            {item.title}
                          </Link>
                        </h2>
                        <div
                          className="text-sm text-[#e53e29] font-bold mb-[12px]
                          min-[576px]:text-base min-[991px]:text-[20px]"
                        >
                          <span className="font-open_sans">
                            {formatter.format(item.price).slice(0, -3)}
                          </span>
                          <span className="font-open_sans text-[13px] ml-[5px] opacity-60 line-through">
                            {formatter.format(item.fromPrice).slice(0, -3)}
                          </span>
                        </div>
                        <div
                          className="border-[2px] border-solid border-[#f6f6f6] 
                          mb-[15px] max-w-[400px]"
                        >
                          <ul className="flex justify-between">
                            <li className="text-[12px]  min-[576px]:text-sm font-bold flex mt-4 text-[#071c1f] ">
                              <CarSvg
                                width={15}
                                height={15}
                                className="fill-[#e53e29] mr-[5px] min-[576px]:text-sm"
                              />
                              {item.year}
                            </li>
                            <li className="text-[12px]  min-[576px]:text-sm font-bold flex mt-4 text-[#071c1f]">
                              <SettingsVariationSvg
                                width={15}
                                height={15}
                                className="stroke-[#e53e29] mr-[5px]"
                              />
                              {item.auto ? "Auto" : ""}
                            </li>
                            <li className="text-[12px]  min-[576px]:text-sm font-bold flex mt-4 text-[#071c1f]">
                              <HightWaySvg
                                width={15}
                                height={15}
                                className="mr-[5px]"
                              />
                              {`${item.kph}kph`}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
