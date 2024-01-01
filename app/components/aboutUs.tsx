"use client";
import Link from "next/link";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import TranslateElement from "./translateElement";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
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
      //  const rect = divRef.current!.getBoundingClientRect();
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
    <div id="about" className="pt-[80px] pb-[85px] bg-white">
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
                   shadow-[0_16px_32px_0_rgba(7,28,31,0.1)] bg-white h-[200px] w-[220px] min-[767px]:w-[310px] min-[767px]:h-[310px]"
                    >
                      <div className="w-full h-full flex justify-center items-center flex-col">
                        <h1 className="text-[120px] leading-[0.8] text-[#e53e29] m-0 font-bold">
                          <span className="text-[80px] min-[767px]:text-[120px] leading-[0.8] text-[#e53e29] font-bold">
                            42
                          </span>
                          <span className="text-[20px] text-[#071c1f]">+</span>
                        </h1>
                        <h6
                          className="text-[14px] 
                      min-[768px]:text-[15px] min-[992px]:text-base text-[#071c1f] font-sans font-bold leading-[1.3]"
                        >
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
                <ChildHeading title="ABOUT US" />
                <MainHeading title="Get Amazing Service From Us." />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ven iam, quis nostrud exercitation ullamco laboris
                nisi
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
                      href={"tel:05462684018"}
                      className="text-inherit  hover:text-[#e53e29] transition-all duration-300 ease-in-out "
                    >
                      507-452-1254
                    </Link>
                    <small className="text-[0.875em] mx-2">or</small>
                    <Link
                      href={"tel:05462684018"}
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
  );
};

export default AboutUs;
