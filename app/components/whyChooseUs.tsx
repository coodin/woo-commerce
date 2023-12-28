import Link from "next/link";
import WheelSvg from "../icons/wheel";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import CarSvg from "../icons/car";

const WhyChooseUS = () => {
  return (
    <div id="shop" className="pt-[120px] pb-[120px] w-full bg-[#F2F6F7]">
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
              <ChildHeading title="WHY CHOOSE US" />
              <MainHeading title="Safety Is Our First Priority" />
              <p
                className="pl-[15px] min-[767px]:pl-[30px]  font-normal leading-[1.8]
              border-l-[2px]  border-solid border-[#e53e29] max-w-[450px] text-[#071c1f] font-open_sans"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
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
                      sed do eiusmod tempor ut labore et dolore magna aliqua. Ut
                      enim ad minim
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
                      className=" fill-[#e53e29]"
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
                      sed do eiusmod tempor ut labore et dolore magna aliqua. Ut
                      enim ad minim
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
              <div className="flex justify-end  -mt-[15%]">
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
  );
};

export default WhyChooseUS;
