"use client";
import { useEffect, useRef, useState } from "react";
import Header from "./header";
import MobileCartMenu from "./mobileCartMenu";
import TranslateElement from "./translateElement";
import Link from "next/link";
import WheelSvg from "../icons/wheel";
import CarSvg from "../icons/car";
import PlumberSvg from "../icons/plumber";
import GearSvg from "../icons/gear";
import SettingsSvg from "../icons/settings";

const Home = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement | null>(null);
  const [relativePos, setRelativePos] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = divRef.current!.getBoundingClientRect();
      // console.log(`window.innerWidth ${window.innerWidth}`);

      const offsetX = (-0.1 * (event.clientX - window.innerWidth / 2)) / 2;

      const offsetY = -0.05 * (event.clientY - window.innerHeight / 2);

      //console.log(`offsetX:${offsetX} offsetY:${offsetY}`);

      setRelativePos({ x: offsetX, y: offsetY });
    };
    if (divRef.current) window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Header setOpenMobileMenu={setOpenMobileMenu}></Header>
      {/*  Utilize Mobile Menu Start */}
      <MobileCartMenu
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      {/* Background Side  */}
      {openMobileMenu && (
        <div
          onClick={() => {
            setOpenMobileMenu(false);
          }}
          className="fixed inset-0 bg-black/50 z-[9999]"
        ></div>
      )}
      {/* First Section */}
      <div className="relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute left-0 top-0 w-screen min-w-full h-full object-cover"
        >
          <source
            src={"/video/woo-commerce-video.mp4"}
            type="video/mp4"
          ></source>
        </video>
        <div
          className="relative flex justify-center items-center h-auto pt-[300px] pb-[100px] min-h-[400px]
         min-[767px]:min-h-[400px]  min-[767px]:pt-[200px]
         min-[991px]:min-h-[550px] 
         min-[1199px]:min-h-[800px]  min-[1199px]:h-screen
         before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-[#071c1f4d] before:z-[1]"
        >
          <div className="h-full flex md:justify-center items-center">
            <div
              className="px-[15px] w-full
          min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
            >
              <div className="-mx-[15px] flex justify-center">
                <div
                  className="relative px-[15px] max-w-full w-full
              min-[992px]:basis-auto min-[992px]:flex-grow-0 min-[992px]:flex-shrink-0 min-[992px]:w-full"
                >
                  <div className="max-w-[850px] mx-auto ">
                    <div className="relative mb-[30px] z-10 w-full min-[1200px]:mb-0">
                      <h6 className="mb-5 opacity-100 visible text-sm min-[767px]:text-base text-center">
                        TALENTED ENGINEER & MECHANICS
                      </h6>
                      <h1
                        className="text-3xl text-center  mb-5 text-white uppercase font-bold leading-[1]
                    min-[767px]:text-[40px] min-[991px]:text-[60px] min-[1200px]:text-[50px]"
                      >
                        Professional Car
                        <br className="hidden md:block" />
                        Service Provide
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About US Area */}
      <div className="pt-[80px] pb-[85px] bg-white">
        <div
          className="px-[15px] mx-auto w-full min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] 
        min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
        >
          <div className="flex flex-wrap mx-[-15px] items-start">
            {/* First Side */}
            <div
              className="relative px-[15px] self-center flex-shrink-0 min-[992px]:basis-auto 
            w-full min-[992px]:w-[50%] max-w-full"
            >
              <div ref={divRef} className="relative mr-0 mb-10">
                <ul
                  style={{
                    transform: "translate3d(0px,0px,0px) rotate(0.0001deg)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="relative w-full h-full  pointer-events-none min-h-[600px] overflow-hidden "
                >
                  {[
                    {
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/effect/1.png",
                      myClassName: "top-[6%] left-[5%]",
                      relativePos,
                    },
                    {
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/effect/2.png",
                      myClassName: "top-[5%] right-[5%]",
                      relativePos,
                    },
                    {
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/effect/3.png",
                      myClassName: "top-[50%] left-[3%]",
                      relativePos,
                    },
                    {
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/effect/4.png",
                      myClassName: "top-[50%] right-[3%]",
                      relativePos,
                    },
                    {
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/effect/5.png",
                      myClassName: "bottom-[5%] left-[0%]",
                      relativePos,
                    },
                    {
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/effect/6.png",
                      myClassName: "bottom-[5%] right-[5%]",
                      relativePos,
                    },
                  ].map((item, index) => {
                    const newRelativeProps = {
                      x:
                        (item.relativePos.x ?? 0) *
                        (index == 2 || index == 1
                          ? index / 1.5
                          : index == 0
                          ? 1
                          : index / 5),
                      y:
                        (relativePos.y ?? 0) *
                        (index == 2 || index == 1
                          ? index / 1.5
                          : index == 0
                          ? 1
                          : index / 5),
                    };

                    return (
                      <TranslateElement
                        key={index}
                        relativePos={newRelativeProps}
                        className={item.myClassName}
                        imgUrl={item.imgUrl}
                      />
                    );
                  })}{" "}
                  {/* Seventh */}
                  <TranslateElement relativePos={relativePos}>
                    <div
                      style={{ transform: "translate3d(0,0,0)" }}
                      className="absolute w-full h-[30%] left-0 m-0
                     bg-[center_bottom] bg-[auto_101%]  bg-transparent animate-shake"
                    >
                      <div
                        className="flex items-center justify-center absolute top-[70%] left-0 right-0 mx-auto text-center
                       shadow-[0_16px_32px_0_rgba(7,28,31,0.1)] bg-white w-[310px] h-[310px]"
                      >
                        <div className="w-full h-full flex justify-center items-center flex-col">
                          <h1 className="text-[120px] leading-[0.8] text-[#e53e29] m-0 font-bold">
                            42
                            <span className="text-[20px] text-[#071c1f]">
                              +
                            </span>
                          </h1>
                          <h6 className="min-[992px]:text-base text-[#071c1f] font-sans font-bold leading-[1.3]">
                            <span className="text-[20px] text-[#e53e29] mr-1">
                              Years
                            </span>
                            Of Experience
                          </h6>
                          <span
                            className="w-[25px] h-[25px] bg-[#e53e29] inline-block absolute 
                          left-[12px] bottom-[-10px]"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </TranslateElement>
                </ul>
              </div>
            </div>
            {/* Second Side */}
            <div
              className="relative min-[992px]:-top-10 px-[15px] self-center flex-shrink-0 min-[992px]:basis-auto 
             w-full min-[992px]:w-[50%] max-w-full"
            >
              <div className="">
                <div className="mb-10">
                  <h6 className="text-[#e53e29] uppercase mb-[15px] font-bold ">
                    ABOUT US
                  </h6>
                  <h1
                    className="text-[#071c1f] 
                  text-2xl font-sans font-bold leading-[1]  mb-[15px]
                  min-[575px]:text-[30px] min-[767px]:text-[40px] min-[991px]:text-[50px] min-[1200px]:text-[56px] min-[1400px]:text-[60px]"
                  >
                    Get Amazing Service From Us.
                  </h1>
                  <p
                    className="pl-[15px] min-[767px]:pl-[30px] font-open_sans font-normal leading-[1.8]
                  border-l-[2px]  border-solid border-[#e53e29] max-w-[450px] text-[#071c1f]"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <p className="text-[#071c1f] text-sm min-[768px]:text-base font-open_sans font-normal !leading-[1.8] mb-6 hyphens-auto ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim ven iam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
                <hr className="h-[1px] my-10" />
                <div className="flex items-center">
                  <div className="text-[50px] mr-5 text-[#e53e29] leading-[1]">
                    <img
                      className="max-w-full"
                      src="https://tunatheme.com/tf/html/autixir-preview/autixir/img/icons/7.png"
                    />
                  </div>
                  <div className="">
                    <p className="mb-[10px] text-sm min-[991px]:text-base text-[#071c1f] hyphens-auto font-open_sans">
                      Call us 24/7. We can answer for
                      <Link href={""} className="text-[#e53e29] underline ml-1">
                        all your questions.
                      </Link>
                    </p>
                    <h2
                      className="font-sans font-bold text-[20px]
                   min-[768px]:text-[22px] min-[992px]:text-[26px] min-[1199px]:text-[30px] text-[#071c1f]"
                    >
                      <Link
                        href={""}
                        className="text-inherit  hover:text-[#e53e29] transition-all duration-300 ease-in-out "
                      >
                        507-452-1254
                      </Link>
                      <small className="text-[0.875em] mx-2">or</small>
                      <Link
                        href={""}
                        className="text-inherit  hover:text-[#e53e29] transition-all duration-300 ease-in-out"
                      >
                        508-452-1253
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHY CHOOSE US AREA START */}
      <div className="pt-[120px] pb-[120px] w-full bg-[#F2F6F7]">
        <div
          className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
        >
          {/* Row */}
          <div className="mx-[-15px] flex flex-wrap">
            {/* First Side */}
            <div
              className="px-[15px] relative  max-w-full 
            min-[992px]:flex-grow-0 min-[992px]:flex-shrink-0 min-[992px]:basis-auto  w-full min-[992px]:w-[50%]"
            >
              <div className="mb-[40px]">
                <h6 className="text-[#e53e29] uppercase text-sm font-sans font-bold mb-[15px]">
                  WHY CHOOSE US
                </h6>
                <h1
                  className="text-[24px] mb-[15px]
                min-[576px]:text-[30px] min-[767px]:text-[40px] 
                min-[991px]:text-[50px] min-[1199px]:text-[56px] min-[1399px]:text-[60px] font-sans font-bold text-[#071c1f]"
                >
                  Safety Is Our First Priority
                </h1>
                <p
                  className="pl-[15px] min-[767px]:pl-[30px]  font-normal leading-[1.8]
                  border-l-[2px]  border-solid border-[#e53e29] max-w-[450px] text-[#071c1f] font-open_sans"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              {/* Row */}
              <div className="mx-[-15px] flex flex-wrap">
                {/* First  */}
                <div
                  className="px-[15px] relative w-full max-w-full
                 min-[768px]:w-[50%] min-[768px]:flex-grow-0 min-[768px]:flex-shrink-0 min-[768px]:basis-auto min-[992px]:w-full"
                >
                  <div className="flex mb-[10px] max-w-[480px]">
                    <div className="text-[#e53e29] mr-5 text-[70px] min-w-fit">
                      <WheelSvg
                        className="stroke-[#e53e29]"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="">
                      <h3
                        className="mb-[5px] text-[#071c1f] font-bold 
                      text-lg min-[768px]:text-[20px] min-[992px]:text-[22px] min-[1200px]:text-[24px] "
                      >
                        <Link
                          className="text-inherit hover:text-[#e53e29] transition-all duration-300  ease-in-out"
                          href={""}
                        >
                          Anytime Get Your Service
                        </Link>{" "}
                      </h3>
                      <p className="text-[#071c1f] mb-6 font-open_sans font-normal text-[14px] min-[991px]:text-[16px] hyphens-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor ut labore et dolore magna aliqua.
                        Ut enim ad minim
                      </p>
                    </div>
                  </div>
                </div>
                {/* Second */}
                <div
                  className="px-[15px] relative w-full max-w-full
                min-[768px]:w-[50%] min-[768px]:flex-grow-0 min-[768px]:flex-shrink-0 min-[768px]:basis-auto min-[992px]:w-full"
                >
                  <div className="flex mb-[10px] max-w-[480px]">
                    <div className="text-[#e53e29] mr-5 text-[70px] min-w-fit">
                      <CarSvg
                        className="stroke-[#e53e29] fill-transparent"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="">
                      <h3
                        className="mb-[5px] text-[#071c1f] font-bold 
                      text-lg min-[768px]:text-[20px] min-[992px]:text-[22px] min-[1200px]:text-[24px] "
                      >
                        <Link
                          className=" text-inherit hover:text-[#e53e29] transition-all duration-300  ease-in-out"
                          href={""}
                        >
                          Hardcore Repair Service
                        </Link>{" "}
                      </h3>
                      <p className="text-[#071c1f] mb-6 font-open_sans font-normal text-[14px] min-[991px]:text-[16px] hyphens-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor ut labore et dolore magna aliqua.
                        Ut enim ad minim
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Side */}
            <div
              className="px-[15px] relative  max-w-full 
            min-[992px]:flex-grow-0 min-[992px]:flex-shrink-0 min-[992px]:basis-auto  w-full min-[992px]:w-[50%]"
            >
              <div className="">
                <div className="text-left ">
                  <img
                    className="max-w-[65%] "
                    src={
                      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/others/1.jpg"
                    }
                  />
                </div>
                <div className="flex justify-end  -mt-[15%] border-[15px] border-solid border-white">
                  <img
                    className="max-w-[65%] border-[15px] border-solid border-white "
                    src={
                      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/others/2.jpg"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  SERVICE AREA START (Service 1) */}
      <div
        className="relative bg-[#071c1f] pt-[115px] pb-[70px]
      before:absolute before:content-['']  before:w-full before:h-[34.2%] before:left-0 before:bottom-0 before:bg-[#F2F6F7]"
      >
        <div
          className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
        >
          {/* Row */}
          <div className="flex flex-wrap -mx-[15px]">
            <div className="relative px-[15px] w-full max-w-full">
              <div className="mb-[40px] text-center">
                <h6 className="text-[#e53e29] uppercase text-sm font-sans font-bold mb-[15px]">
                  SERVICE
                </h6>
                <h1
                  className="text-[24px] mb-[15px]
                min-[576px]:text-[30px] min-[767px]:text-[40px] 
                min-[991px]:text-[50px] min-[1199px]:text-[56px] min-[1399px]:text-[60px] font-sans font-bold text-white"
                >
                  What We Do<span className="text-[#e53e29]">.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-[15px]">
            {/* First */}
            <div
              className="relative px-[15px] flex-shrink-0 w-full max-w-full
             min-[576px]:w-[50%] min-[576px]:flex-shrink-0 min-[576px]:flex-grow-0 min-[576px]:basis-auto
             min-[992px]:w-[33.33333333%]"
            >
              {" "}
              <div className="bg-white mb-[50px] group">
                <div className="relative overflow-hidden">
                  <img
                    className="transition-all duration-500 ease-in-out group-hover:scale-[1.1]"
                    src={
                      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/service/1.jpg"
                    }
                  />
                  <div
                    className="absolute flex justify-center items-center text-[#e53e29]
                   bg-white right-0 bottom-0 w-[70px] h-[70px]"
                  >
                    <PlumberSvg
                      className="fill-[#e53e29]"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="px-[22px] pt-[30px] pb-[10px]">
                  <h3
                    className="mb-[5px] text-[#071c1f]
                   text-[18px] min-[768px]:text-[20px] min-[992px]:text-[22px] min-[1200px]:text-[24px] font-bold"
                  >
                    <Link
                      href={""}
                      className="hover:text-[#e53e29] transition-all duration-300 ease-in-out"
                    >
                      Performance Upgrades
                    </Link>
                  </h3>
                  <p className="text-[14px] text-[#071c1f] font-open_sans mb-6 hyphens-auto min-[768px]:text-[16px] font-normal">
                    Lorem ipsum dolor sit amet, consect
                  </p>
                </div>
              </div>
            </div>
            {/* Second */}
            <div
              className="relative px-[15px] flex-shrink-0 w-full max-w-full
            min-[576px]:w-[50%] min-[576px]:flex-shrink-0 min-[576px]:flex-grow-0 min-[576px]:basis-auto
            min-[992px]:w-[33.33333333%]"
            >
              {" "}
              <div className="bg-white mb-[50px] group">
                <div className="relative overflow-hidden">
                  <img
                    className="transition-all duration-500 ease-in-out group-hover:scale-[1.1]"
                    src={
                      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/service/2.jpg"
                    }
                  />
                  <div
                    className="absolute flex justify-center items-center text-[#e53e29]
                   bg-white right-0 bottom-0 w-[70px] h-[70px]"
                  >
                    <GearSvg
                      className="fill-[#e53e29]"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="px-[22px] pt-[30px] pb-[10px]">
                  <h3
                    className="mb-[5px] text-[#071c1f]
                   text-[18px] min-[768px]:text-[20px] min-[992px]:text-[22px] min-[1200px]:text-[24px] font-bold"
                  >
                    <Link
                      href={""}
                      className="hover:text-[#e53e29] transition-all duration-300 ease-in-out"
                    >
                      Performance Upgrades
                    </Link>
                  </h3>
                  <p className="text-[14px] text-[#071c1f] font-open_sans mb-6 hyphens-auto min-[768px]:text-[16px] font-normal">
                    Lorem ipsum dolor sit amet, consect
                  </p>
                </div>
              </div>
            </div>
            {/* Third */}
            <div
              className="relative px-[15px] flex-shrink-0 w-full max-w-full
            min-[576px]:w-[50%] min-[576px]:flex-shrink-0 min-[576px]:flex-grow-0 min-[576px]:basis-auto
            min-[992px]:w-[33.33333333%]"
            >
              {" "}
              <div className="bg-white mb-[50px] group">
                <div className="relative overflow-hidden">
                  <img
                    className="transition-all duration-500 ease-in-out group-hover:scale-[1.1]"
                    src={
                      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/service/3.jpg"
                    }
                  />
                  <div
                    className="absolute flex justify-center items-center text-[#e53e29]
                   bg-white right-0 bottom-0 w-[70px] h-[70px]"
                  >
                    <SettingsSvg
                      className="fill-[#e53e29]"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="px-[22px] pt-[30px] pb-[10px]">
                  <h3
                    className="mb-[5px] text-[#071c1f] 
                  text-[18px] min-[768px]:text-[20px] min-[992px]:text-[22px] min-[1200px]:text-[24px] font-bold"
                  >
                    <Link
                      href={""}
                      className="hover:text-[#e53e29] transition-all duration-300 ease-in-out"
                    >
                      Performance Upgrades
                    </Link>
                  </h3>
                  <p className="text-[14px] text-[#071c1f] font-open_sans mb-6 hyphens-auto min-[768px]:text-[16px] font-normal">
                    Lorem ipsum dolor sit amet, consect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
