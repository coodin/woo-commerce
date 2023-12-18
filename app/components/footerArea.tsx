import Link from "next/link";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import DateSvg from "../icons/date";
import { convertDate } from "@/lib/utils";

const FooterArea = () => {
  return (
    <footer className="">
      <div className="pt-[120px] pb-5 bg-[#071c1f]">
        <div
          className="px-[15px] w-full mx-auto 
    min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
        >
          {/* Row */}
          <div className="flex flex-wrap mx-[-15px] ">
            {/* First */}
            <div
              className="relative flex-shrink-0 w-full max-w-full px-[15px]
            min-[768px]:w-[41.66666667%]  min-[1200px]:w-[33.33333333%] min-[768px]:flex-shrink-0  min-[768px]:flex-grow-0  min-[768px]:basis-auto
            "
            >
              <div
                className="relative z-[9] bg-[url(https://tunatheme.com/tf/html/autixir-preview/autixir/img/bg/4.jpg)]
              pt-[50px] px-[25px] min-[991px]:pt-[50px] min-[991px]:px-[50px] pb-10 border-b-[5px] border-solid border-[#bc3928] mt-[-92px] mb-[60px]
              before:absolute before:left-0   bg-cover bg-[center_center] bg-no-repeat
              before:top-0 before:content-[''] before:bg-[#071c1fe6] before:w-full before:h-full before:z-[-1]"
              >
                <ChildHeading title={"time shedule"} />
                <h1
                  className={`text-white text-2xl font-sans font-bold leading-[1.3]  mb-[25px]
      `}
                >
                  Meet In Timeline.
                </h1>
                <ul>
                  {[
                    { day: "Monday", timePeriod: "07:00AM - 20:00PM" },
                    { day: "Thuesday", timePeriod: "07:00AM - 20:00PM" },
                    { day: "Whednesday", timePeriod: "07:00AM - 20:00PM" },
                    { day: "Thursday", timePeriod: "07:00AM - 20:00PM" },
                    { day: "Friday", timePeriod: "07:00AM - 20:00PM" },
                    { day: "Saturday", timePeriod: "07:00AM - 20:00PM" },
                    { day: "Sunday", timePeriod: "Offical Holiday" },
                  ].map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-between text-sm min-[767px]:text-base text-white font-bold  mt-[10px] pb-[10px]
                         border-b border-solid border-[#103034] leading-[1.8]"
                      >
                        {item.day}
                        <span
                          className={`${
                            item.day == "Sunday"
                              ? "text-white font-bold"
                              : "text-[#8cb2b2] font-semibold"
                          }  text-sm  outline-none leading-[1.8]`}
                        >
                          {item.timePeriod}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Second */}
            <div
              className="relative flex-shrink-0 w-full max-w-full px-[15px]
            min-[768px]:w-[58.33333333%] min-[1200px]:w-[41.66666667%]  min-[768px]:flex-shrink-0  min-[768px]:flex-grow-0  min-[768px]:basis-auto"
            >
              <div className="flex flex-wrap pl-0 min-[767px]:pl-[30px] justify-between  mb-[60px]">
                <h4 className="text-2xl text-white mb-[25px] leading-[1.3] font-bold w-full">
                  Services.
                </h4>

                <div className="w-full min-[575px]:w-[50%]">
                  <ul className="">
                    {[
                      { name: "Engine Diagnostics", url: "" },
                      { name: "Vehicles Damaged", url: "" },
                      { name: "Air Conditioning Evac", url: "" },
                      { name: "Anti Lock Brake Service", url: "" },
                      { name: "Computer Diagnostics", url: "" },
                      { name: "Performance Upgrades", url: "" },
                    ].map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="relative mb-5 text-[#ACD2D8] font-semibold text-sm  min-[767px]:text-base group"
                        >
                          <Link
                            className="relative font-open_sans transition-all duration-300 ease-in-out hover:text-[#e53e29]
                            before:absolute before:content-['//'] before:left-0 before:top-[50%]
                             before:translate-y-[-50%] before:transition-[inherit] before:opacity-0 before:invisible
                             before:ml-[-20px] before:text-[#e53e29] 
                             group-hover:before:opacity-100 group-hover:before:visible group-hover:before:ml-0
                             group-hover:pl-5"
                            href={item.url}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="w-full ml-0 min-[575px]:pl-5  min-[575px]:w-[50%]">
                  <ul className="">
                    {[
                      { name: "Car Wash & Cleaning", url: "" },
                      { name: "Choose your Repairs", url: "" },
                      { name: "Free Consultancy", url: "" },
                      { name: "Emergency Time", url: "" },
                    ].map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="relative mb-5 min-[767px]:mb-[30px] text-[#ACD2D8] font-semibold text-sm
                          min-[767px]:text-base group"
                        >
                          <Link
                            className="relative font-open_sans transition-all duration-300 ease-in-out hover:text-[#e53e29]
                            before:absolute before:content-['//'] before:left-0 before:top-[50%]
                             before:translate-y-[-50%] before:transition-[inherit] before:opacity-0 before:invisible
                             before:ml-[-20px] before:text-[#e53e29] 
                             group-hover:before:opacity-100 group-hover:before:visible group-hover:before:ml-0
                             group-hover:pl-5"
                            href={item.url}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="w-full"></div>
              </div>
            </div>
            {/* Third */}
            <div
              className="relative flex-shrink-0 w-full max-w-full px-[15px]
            min-[768px]:w-[50%] min-[1200px]:w-[25%]  min-[768px]:flex-shrink-0  min-[768px]:flex-grow-0  min-[768px]:basis-auto"
            >
              <div className="mb-[60px]">
                <h4 className="text-2xl text-white mb-[25px] font-bold">
                  News Feeds.
                </h4>{" "}
                {[
                  {
                    date: new Date(),
                    description:
                      "The branch of biology that deals with the normal.",
                  },
                  {
                    date: new Date(),
                    description:
                      "Electric Car Maintenance, Servicing & Repairs",
                  },
                  {
                    date: new Date(),
                    description:
                      "The branch of biology that deals with the normal.",
                  },
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b border-solid border-[#103034] mb-5"
                    >
                      <div className="mb-[5px]">
                        <ul className="">
                          <li
                            className="flex items-center relative text-xs text-[#ACD2D8]  mr-0
                          font-bold mt-0 "
                          >
                            <DateSvg className="w-3 h-3 fill-[#e53e29] mr-[5px]" />
                            {convertDate(item.date)}
                          </li>
                        </ul>
                      </div>
                      <h4 className="text-lg text-white min-[767px]:text-[20px] mb-5">
                        <Link
                          className="hover:text-[#e53e29]  transition-all duration-300 ease-in-out font-bold"
                          href={""}
                        >
                          {item.description}
                        </Link>
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#041113] text-center  py-[30px]">
        {/* Container */}
        <div
          className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
        >
          <div className="flex flex-wrap mx-[-15px]">
            {/* First */}
            <div className="relative w-full min-[768px]:w-[50%] max-w-full flex-shrink-0 flex-grow-0 basis-auto px-[15px]">
              <div className="flex justify-center min-[991px]:justify-start">
                <div className="min-w-[auto]">
                  <Link className="text-2xl" href={""}>
                    <img
                      className=""
                      src="https://tunatheme.com/tf/html/autixir-preview/autixir/img/logo-2.png"
                    />
                  </Link>{" "}
                </div>
                <div
                  className="relative flex items-center pl-[20px] ml-[20px] 
                before:absolute before:content-[''] before:left-0 before:top-[50%] before:translate-y-[-50%]
                before:h-[30px]  before:w-[1px] before:bg-[#999]"
                >
                  <div className="m-0 text-left">
                    <h6 className="text-[#84A2A6] text-sm font-semibold font-open_sans">
                      Copyright & Design By
                    </h6>
                    <h4 className="text-white text-base min-[991px]:text-sm mt-[5px] leading-[1] font-open_sans font-bold">
                      Example - 2023
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="relative w-full min-[768px]:w-[50%] max-w-full flex-shrink-0 flex-grow-0 basis-auto px-[15px] self-center">
              <div className="text-center  mt-[25px]  min-[768px]:mt-0">
                <ul className="flex justify-center space-x-[20px] items-center min-[991px]:justify-end">
                  {[
                    { name: "Terms & Conditions", href: "" },
                    { name: "Claim", href: "" },
                    { name: "Privacy & Policy", href: "" },
                  ].map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="inline-block  text-sm font-bold text-white "
                      >
                        <Link
                          className="m-0 hover:text-[#e53e29] transition-all duration-300 ease-in-out"
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;
