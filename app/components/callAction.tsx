import Link from "next/link";
import CallSvg from "../icons/call";

const CallAction = () => {
  return (
    <div id="contact" className="bg-[#e8edee] py-[20px]">
      <div
        className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
      >
        {/* Row */}
        <div className="mx-[-15px] flex  flex-wrap">
          <div className="relative px-[15px] w-full max-w-full">
            <div className="flex flex-col min-[767px]:flex-row  justify-between min-[767px]:justify-between items-center">
              <h2 className="text-xl min-[768px]:text-[22px] min-[992px]:text-[26px] min-[1200px]:text-[30px] text-[#071c1f] font-bold leading-[1.3] font-sans">
                Get A Free Service Or Make A Call
              </h2>
              <div className="mt-[15px] min-[767px]:mt-0">
                <Link
                  href={"tel:05462684018"}
                  className="relative py-[10px] px-[20px] text-sm bg-white text-[#071c1f] shadow-[0_1px_6px_0_rgba(32,33,36,.28)]
                    rounded-none flex items-center font-bold font-sans
                    min-[768px]:text-base min-[768px]:py-[12px] min-[768px]:px-[25px]
                    min-[991px]:px-[40px] min-[991px]:py-[17px]
                    hover:bg-[#e53e29] hover:text-white z-[1] transition-all duration-300 ease-in-out
                    after:content-[''] after:absolute after:z-[-1] after:transition-all after:duration-300 after:ease-in-out
                    after:w-[0%] after:h-full after:top-0 after:left-0 after:bg-[#e53e29] hover:after:w-full group"
                >
                  {" "}
                  <CallSvg
                    width={20}
                    height={20}
                    className="px-[2px] stroke-black relative -top-[2px] group-hover:fill-white transition-all duration-300 ease-in-out"
                  />
                  MAKE A CALL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAction;
