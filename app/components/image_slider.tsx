"use client";
import Slider from "react-slick";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import Arrow from "@/app/components/ui/arrow";
import PrevSvg from "../icons/prev";
import NextSvg from "../icons/next";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Dialog from "./ui/dialog";

type ImageSliderProps = {
  data: { imgSrc: string }[];
  // onClickOfImage: (itemSrc: string) => void;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mount, setMount] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState<number>(0);
  const [activeNumber, setActiveNumber] = useState(0);
  const [dialogStatus, setDialogStatus] = useState(false);

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
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <>
      <Dialog
        status={dialogStatus}
        setStatus={setDialogStatus}
        list={data}
        defaultActive={activeNumber}
      />

      <div className="bg-[#F2F6F7] pt-[115px] pb-[250px]">
        <div
          className="px-[15px] w-full mx-auto 
    min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
        >
          <div className="flex flex-wrap mx-[-15px]">
            <div className="relative px-[15px] w-full max-w-full">
              <div className="mb-[40px] text-center">
                <ChildHeading title="PORTFOLIO" />
                <MainHeading
                  className="max-[767px]:min-w-full min-[767px]:min-w-[320px]"
                  title="We Have Done"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-[15px] mx-auto">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative mx-[-15px]  group/first"
          >
            <Slider
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              initialSlide={0}
              centerMode={true}
              centerPadding={window.innerWidth > 768 ? "80px" : "50px"}
              afterChange={handleDotClick}
              appendDots={(dots) => (
                <ul
                  style={{
                    position: "static",
                    display: window.innerWidth < 975 ? "block" : "none",
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
              responsive={[
                {
                  breakpoint: 560,
                  settings: {
                    dots: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    prevArrow: undefined,
                    nextArrow: undefined,
                  },
                },
                {
                  breakpoint: 975,
                  settings: {
                    dots: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                  },
                },
              ]}
              prevArrow={
                <Arrow
                  myStyle={{
                    left: isHovered ? "50px" : "10px",
                    right: "auto",
                    display: window.innerWidth > 975 ? "block" : "none",
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
                    right: isHovered ? "50px" : "10px",
                    display: window.innerWidth > 975 ? "block" : "none",
                  }}
                >
                  <NextSvg
                    className="fill-[#071c1f] absolute  group-hover/arrow:fill-white
                top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5 h-5
               transition-all duration-300 ease-in-out"
                  />
                </Arrow>
              }
            >
              {data.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setActiveNumber(index);
                      setDialogStatus((prev) => !prev);
                    }}
                    key={index}
                    className="relative px-[15px]"
                  >
                    <div className="mb-[30px] group/image">
                      <div className="block overflow-hidden cursor-pointer">
                        <img
                          src={item.imgSrc}
                          className="
                        group-hover/image:scale-110
                        transition-all duration-500 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
