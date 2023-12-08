import Link from "next/link";
import CallSvg from "../icons/call";

const Logo = () => {
  return (
    <div className="flex items-center justify-center min-[768px]:justify-start mt-[10px]  mb-[30px] min-[768px]:m-0 w-full px-[15px]">
      <div className="flex">
        <Link href={""} className="">
          <img src="/Silber.png" height={45} width={100} />
        </Link>
      </div>
      <div className="flex ml-5 pl-5 relative items-center ">
        <div className="absolute left-0 top-[50%] -translate-y-[50%] h-[30px] w-[1px] bg-[#999]"></div>
        <div className="hidden min-[449px]:block mr-[10px] ">
          <CallSvg height={35} width={35} />
        </div>
        <div className="flex flex-col">
          <h6 className="text-sm font-semibold leading-tight">Get Support</h6>
          <h4 className="mt-[5px] text-xl font-bold leading-none">
            <Link
              href={""}
              className="text-base md:text-lg not-italic leading-none font-bold hover:text-[#e53e29] transition-all ease-linear duration-300"
            >
              123-456-789-10
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Logo;
