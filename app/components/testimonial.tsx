"use client";
import Slider from "react-slick";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import { useEffect, useState } from "react";
import Chat from "../icons/chat";

const Testimonial = () => {
  const [mount, setMount] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState<number>(0);
  const handleDotClick = (index: number) => {
    setActiveDotIndex(index);
  };

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="px-[15px] pt-[115px] pb-[100px] bg-white">
      <div className="px-[15px] w-full mx-auto">
        {/* Row */}
        <div className="mx-[-15px] flex flex-wrap">
          <div
            className="relative flex-shrink-0 w-full max-w-full px-[15px] 
          min-[992px]:flex-shrink-0 min-[992px]:flex-grow-0 min-[992px]:basis-auto min-[992px]:w-full"
          >
            <div className="mb-10 text-center">
              <ChildHeading title="Testimonials" />
              <MainHeading title="Clients Feedbacks" />
            </div>
          </div>
        </div>
        {/* Row */}
        <div className="mx-[-15px] flex flex-wrap">
          <div
            className="relative flex-shrink-0 w-full max-w-full px-[15px] 
          min-[992px]:flex-shrink-0 min-[992px]:flex-grow-0 min-[992px]:basis-auto min-[992px]:w-full"
          >
            <div className="max-w-[95%] min-[767px]:max-w-[70%] min-[991px]:max-w-[45%] mx-auto text-center">
              <Slider
                dots={true}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                afterChange={handleDotClick}
                autoplay={true}
                fade={true}
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
              >
                {[
                  {
                    userName: "Liam Mason",
                    description:
                      "Amet Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo.  ",
                    major: "Officer",
                    imgUrl:
                      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/testimonial/1.jpg",
                  },
                  {
                    userName: "Noah Alexander",
                    description:
                      "Dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco nisi ut aliquip ex ea commodo. ",
                    major: "Professor",
                    imgUrl:
                      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/testimonial/6.jpg",
                  },
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        activeDotIndex === index ? "opacity-100" : "opacity-0"
                      } relative transition-opacity duration-[700ms] ease-in-out`}
                    >
                      <div
                        className="absolute top-[-15px] leading-[1] text-[#F7F7F7]
                       left-[50%] translate-x-[-50%] z-[-1]"
                      >
                        <Chat className="w-[240px] h-[240px] fill-[#F7F7F7]" />
                      </div>
                      <div className="max-w-[85px] mt-[50px] mx-auto">
                        <img
                          className="outline-[8px] outline outline-white shadow-[0_16px_32px_0_rgba(7,28,31,0.1)]"
                          src={item.imgUrl}
                        />
                      </div>
                      <div className="mt-[30px]">
                        <p
                          className="text-base min-[767px]:text-xl min-[991px]:text-[24px]
                           text-[#071c1f] font-open_sans !leading-[1.8]
                        font-normal  mb-6 min-[767px]:mb-[30px] min-[991px]:mb-9"
                        >
                          {item.description}
                        </p>
                        <h4
                          className={`text-[30px] text-[#071c1f] font-sans font-bold leading-[1]  mb-[5px] `}
                        >
                          {item.userName}
                        </h4>
                        <h6
                          className={` text-[#e53e29]
      text-[14px] min-[768px]:text-[15px] min-[992px]:text-[16px] capitalize mb-[15px] font-bold`}
                        >
                          {item.major}
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <ul className="absolute top-0 w-full h-full p-0 m-0 hidden min-[992px]:block">
              <li className="">
                <img
                  className="absolute top-[-15%] left-0 w-[105px]"
                  src={
                    "https://tunatheme.com/tf/html/autixir-preview/autixir/img/testimonial/3.jpg"
                  }
                />
              </li>
              <li className="">
                <img
                  className="absolute top-0 left-auto right-[3%] w-[65px]"
                  src={
                    "https://tunatheme.com/tf/html/autixir-preview/autixir/img/testimonial/4.jpg"
                  }
                />
              </li>
              <li className="">
                <img
                  className="absolute top-[70%] left-[10%] w-[65px]"
                  src={
                    "https://tunatheme.com/tf/html/autixir-preview/autixir/img/testimonial/6.jpg"
                  }
                />
              </li>
              <li className="">
                <img
                  className="absolute top-[60%] left-auto right-[10%] w-[125px]"
                  src={
                    "https://tunatheme.com/tf/html/autixir-preview/autixir/img/testimonial/1.jpg"
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
