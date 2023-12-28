import Link from "next/link";
import CarburetorSvg from "./icons/carburetor";
import EngineSvg from "./icons/engine";
import CarDoorSvg from "./icons/carDoor";
import ChildHeading from "./components/ui/childHeading";
import MainHeading from "./components/ui/mainHeading";
import BodyColorSvg from "./icons/bodyColor";
import PureDiagnosticSvg from "./icons/pureDiagnostic";
import EngineLockSvg from "./icons/engineLock";
import AirConditionRepair from "./icons/airConditionRepair";

const FeatureArea = () => {
  return (
    <div className="pt-[115px] pb-[80px] bg-white">
      <div
        className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
      >
        {/* First */}
        {/* Row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="px-[15px] relative flex-shrink-0 w-full max-w-full">
            <div className="block mb-[40px] min-[767px]:flex min-[767px]:justify-center min-[767px]:items-center">
              <div>
                <p
                  className="pl-[15px]  font-open_sans font-normal leading-[1.8]
                  border-l-2  border-solid border-[#e53e29] max-w-[450px] text-[#071c1f] mb-[15px]
                  min-[767px]:pr-[30px] min-[767px]:pl-0 min-[767px]:py-0 min-[767px]:border-l-0 min-[767px]:border-r-2
                  min-[767px]:mr-[30px] min-[767px]:mb-0"
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="">
                <ChildHeading title="WHY CHOOSE US" />
                <MainHeading
                  className="max-[767px]:min-w-full min-[767px]:min-w-[320px]"
                  title="Get Extra Benifits"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Second */}
        {/* Row */}
        <div className="mx-[-15px] flex flex-wrap">
          {/* First */}
          <div
            className="px-[15px] relative flex-shrink-0 w-full max-w-full 
              min-[992px]:w-[33.33333333%] min-[992px]:flex-grow-0
            "
          >
            <div className="flex flex-wrap mx-[-15px] justify-center ">
              {[
                {
                  title: "Body Color",
                  description:
                    "Lorem ipsum dolor sit amet, consect icing elit, sed do eiusmod tempor",
                  logo: (
                    <BodyColorSvg
                      className="fill-[#e53e29] stroke-[#e53e29] stroke-[2]"
                      width={40}
                      height={40}
                    />
                  ),
                },
                {
                  title: "Glass Change",
                  description:
                    "Lorem ipsum dolor sit amet, consect icing elit, sed do eiusmod tempor",
                  logo: (
                    <CarDoorSvg
                      className="fill-[#e53e29] stroke-[#e53e29]"
                      width={40}
                      height={40}
                    />
                  ),
                },
                {
                  title: "Air Condition Repair",
                  description:
                    "Lorem ipsum dolor sit amet, consect icing elit, sed do eiusmod tempor",
                  logo: (
                    <AirConditionRepair
                      className="fill-[#e53e29] stroke-[#e53e29]"
                      width={40}
                      height={40}
                    />
                  ),
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative px-[15px] flex-grow-0 flex-shrink-0 basis-auto w-full 
                      min-[768px]:w-[50%] min-[992px]:w-full"
                  >
                    <div
                      className="relative flex flex-row-reverse pt-[35px] px-[22px] pb-[15px] 
                  transition-all duration-300 ease-in-out border-solid border-[2px] border-[#f4faff] mb-5
                  before:content-[''] before:absolute before:right-[-2px] before:top-[50%] before:translate-y-[-50%]
                    before:w-[4px] before:h-[0%] before:bg-[#e53e29] before:invisible before:opacity-0
                    before:transition-all before:duration-500 before:ease-in-out
                    hover:before:h-[80%] hover:before:opacity-100 hover:before:visible
                  "
                    >
                      <div className="ml-5 leading-[1.5]">{item.logo}</div>
                      <div className="">
                        <h2
                          className="mb-[5px] text-[#071c1f] font-bold text-right text-xl min-[767px]:text-[22px] min-[991px]:text-[26px] min-[1199px]:text-[30px]
                           hover:text-[#e53e29] transition-all duration-300 ease-in-out"
                        >
                          <Link href={""} className="">
                            {item.title}
                          </Link>
                        </h2>
                        <p className="text-sm mb-[21px] text-[#071c1f] leading-[25px] font-open_sans text-right">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Second */}
          <div
            className="px-[15px] relative flex-shrink-0 w-full max-w-full 
              min-[992px]:w-[33.33333333%] min-[992px]:flex-grow-0
            "
          >
            <div className="mb-[30px] flex justify-center">
              <img
                className=""
                src={
                  "https://tunatheme.com/tf/html/autixir-preview/autixir/img/others/2.png"
                }
              />
            </div>
          </div>
          {/* Third */}
          <div
            className="px-[15px] relative flex-shrink-0 w-full max-w-full 
              min-[992px]:w-[33.33333333%] min-[992px]:flex-grow-0
            "
          >
            <div className="flex flex-wrap mx-[-15px] justify-center ">
              {[
                {
                  title: "Tires Repair",
                  description:
                    "Lorem ipsum dolor sit amet, consect icing elit, sed do eiusmod tempor",
                  logo: (
                    <EngineSvg
                      className="fill-[#e53e29]"
                      width={40}
                      height={40}
                    />
                  ),
                },
                {
                  title: "Pure Diagnostic",
                  description:
                    "Lorem ipsum dolor sit amet, consect icing elit, sed do eiusmod tempor",
                  logo: (
                    <PureDiagnosticSvg
                      className="fill-[#e53e29]"
                      width={40}
                      height={40}
                    />
                  ),
                },
                {
                  title: "Engine Lock",
                  description:
                    "Lorem ipsum dolor sit amet, consect icing elit, sed do eiusmod tempor",
                  logo: (
                    <EngineLockSvg
                      className="fill-[#e53e29] stroke-[#e53e29] stroke-1"
                      width={40}
                      height={40}
                    />
                  ),
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative px-[15px] flex-grow-0 flex-shrink-0 basis-auto w-full 
                      min-[768px]:w-[50%] min-[992px]:w-full"
                  >
                    <div
                      className="relative flex  pt-[35px] px-[22px] pb-[15px] hover:shadow-[0_16px_32px_0_rgba(7,28,31,0.1)]
                  transition-all duration-300 ease-in-out border-solid border-[2px] border-[#f4faff] mb-5
                  before:content-[''] before:absolute before:left-[-2px] before:top-[50%] before:translate-y-[-50%]
                    before:w-[4px] before:h-[0%] before:bg-[#e53e29] before:invisible before:opacity-0
                    before:transition-all before:duration-500 before:ease-in-out
                    hover:before:h-[80%] hover:before:opacity-100 hover:before:visible
                  "
                    >
                      <div className="mr-5 leading-[1.5]">{item.logo}</div>
                      <div className="">
                        <h2
                          className="mb-[5px] text-[#071c1f] text-xl min-[767px]:text-[22px] min-[991px]:text-[26px] min-[1199px]:text-[30px]
                         font-bold text-left hover:text-[#e53e29] transition-all duration-300 ease-in-out"
                        >
                          <Link href={""} className="">
                            {item.title}
                          </Link>
                        </h2>
                        <p className="text-sm mb-[21px] text-[#071c1f] leading-[25px] font-open_sans text-left">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
