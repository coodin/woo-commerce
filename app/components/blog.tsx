"use client";
import { useEffect, useRef, useState } from "react";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import Slider from "react-slick";
import Link from "next/link";
import ProfileSvg from "../icons/profile";
import ServiceSvg from "../icons/service";
import DateSvg from "../icons/date";
import { convertDate } from "@/lib/utils";
import { BlogType, blogList } from "@/lib/types";
import BlogModalProvider from "./blogModelProvider";

type BlogProps = {};

const Blog: React.FC<BlogProps> = ({}) => {
  const [mount, setMount] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState<number>(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [blog, setBlog] = useState<BlogType | undefined>(undefined);

  const handleDotClick = (index: number) => {
    setActiveDotIndex(index);
  };

  // const convertDate = (date: Date): string => {
  //   const formattedDate = date.toLocaleDateString("en-US", {
  //     month: "long", // Specify the full name of the month (e.g., "June")
  //     day: "numeric", // Specify the day of the month (e.g., "24")
  //     year: "numeric", // Specify the year (e.g., "2020")
  //   });
  //   return formattedDate;
  // };

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div
      className="bg-[url(https://tunatheme.com/tf/html/autixir-preview/autixir/img/bg/3.jpg)] 
    bg-auto bg-[top_center] bg-no-repeat pt-[115px]"
    >
      <BlogModalProvider dialogRef={dialogRef} blog={blog} />
      {/* Container */}
      <div
        className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
      >
        {/* Row */}
        <div className="mx-[-15px]">
          <div className="relative flex-shrink-0 w-full max-w-full px-[15px]">
            <div className="mb-[40px]">
              <ChildHeading title={"blog & insights"} whetherWhite={true} />
              <MainHeading
                title={"News Feeds"}
                whetherWhite={true}
                changeDot={true}
              />
            </div>
          </div>
        </div>
        {/* Row */}
        <div className="mx-[-15px] ">
          <Slider
            dots={true}
            slidesToShow={3}
            slidesToScroll={1}
            infinite={true}
            className="center"
            centerMode={true}
            centerPadding="0px"
            afterChange={handleDotClick}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  dots: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 1200,
                settings: {
                  dots: true,
                  speed: 500,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
            ]}
            appendDots={(dots) => (
              <ul
                style={{
                  position: "static",
                  display: window.innerWidth < 1200 ? "block" : "none",
                  marginBottom: window.innerWidth > 760 ? 30 : 15,
                  width: "100%",
                  maxWidth: "100%",
                  padding: 0,
                  textAlign: "center",
                  lineHeight: 1,
                  backgroundColor: "white",
                }}
                className="custom"
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
          >
            {blogList.map((blog, index) => {
              return (
                <div
                  onClick={() => {
                    setBlog(blog);
                    dialogRef.current?.showModal();
                  }}
                  key={index}
                  className="relative mb-[30px] cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <div className="transition-all duration-500 ease-in-out">
                      <img
                        className="group-hover:scale-110 transition-all duration-500 ease-in-out"
                        src={blog.imageUrl}
                      />
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="mt-[-50px] relative w-[calc(100%_-30px)] shadow-[0_5px_20px_0_rgba(23,44,82,0.1)]
                   p-[30px] mx-auto bg-white"
                  >
                    <div className="mb-[15px]">
                      <ul className="">
                        <li className="relative text-[12px] min-[767px]:text-sm mr-[10px] min-[767px]:mr-[25px] font-bold inline-block text-[#071c1f]">
                          <button
                            className="flex items-center hover:text-[#e53e29] 
                            transition-all duration-300 ease-in-out "
                          >
                            <ProfileSvg className="w-[12px] h-[12px] fill-[#e53e29] mr-[5px]" />
                            by:{blog.role}
                          </button>
                        </li>
                        <li className="relative text-[12px] min-[767px]:text-sm  font-bold inline-block text-[#071c1f] ">
                          <button
                            className="flex items-center hover:text-[#e53e29]
                             transition-all duration-300 ease-in-out"
                          >
                            <ServiceSvg className="w-[12px] h-[12px] fill-[#e53e29] mr-[5px]" />
                            {blog.service}
                          </button>
                        </li>
                      </ul>
                    </div>
                    <h3 className="text-[#071c1f] font-bold mb-5 text-lg min-[762px]:text-[22px] min-[991px]:text-[26px]">
                      <button className="hover:text-[#e53e29] transition-all duration-300 ease-in-out">
                        {blog.title}
                      </button>
                    </h3>
                    <div className="flex justify-between items-center border-t border-solid border-[#e5eaee] pt-5">
                      <div className="">
                        <ul>
                          <li className="flex items-center relative text-[12px] min-[767px]:text-sm text-[#071c1f] font-bold ">
                            <DateSvg className="w-3 h-3 fill-[#e53e29] mr-[5px]" />
                            {convertDate(blog.date)}
                          </li>
                        </ul>
                      </div>
                      <div className="text-sm min-[767px]:text-sm font-bold text-[#e53e29] uppercase">
                        <button className="">Read more</button>
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
  );
};

export default Blog;
