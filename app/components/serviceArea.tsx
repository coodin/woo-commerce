import Link from "next/link";
import PlumberSvg from "../icons/plumber";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import GearSvg from "../icons/gear";
import SettingsSvg from "../icons/settings";

const ServiceArea = () => {
  return (
    <div
      id="news"
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
              <ChildHeading title="SERVICE" />
              <MainHeading title="What We Do" whetherWhite={true} />
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
                    className=" fill-[#e53e29] stroke-[#e53e29]"
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
                <p className="text-[14px] leading-6  max-h-[70px] overflow-y-hidden text-[#071c1f] font-open_sans mb-6 hyphens-auto min-[768px]:text-[16px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  laborum odio iure deserunt. Facere quos non molestiae quaerat.
                  Earum sapiente nemo ratione ipsa adipisci sunt atque
                  laudantium necessitatibus dignissimos? Numquam?
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
                    className="fill-[#e53e29] stroke-[#e53e29]"
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
                    Anti Lock Break
                  </Link>
                </h3>
                <p className="text-[14px] leading-6  max-h-[70px] overflow-y-hidden text-[#071c1f] font-open_sans mb-6 hyphens-auto min-[768px]:text-[16px] font-normal">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident quas aut in non illum nulla officiis amet assumenda,
                  quasi velit delectus temporibus ea vero ullam dolore eaque
                  pariatur nesciunt magni!
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
                    Crash Car Repair
                  </Link>
                </h3>
                <p className="text-[14px] leading-6  max-h-[70px] overflow-y-hidden text-[#071c1f] font-open_sans mb-6 hyphens-auto min-[768px]:text-[16px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  nulla soluta quos quas sed? Dignissimos dolorum animi
                  explicabo quod praesentium eos ratione, nemo fuga tempora
                  maiores doloribus voluptatem neque et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
