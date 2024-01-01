import { RefObject } from "react";

type FirstSection = {
  appointmentRef: RefObject<HTMLDialogElement>;
};

const FirstSection: React.FC<FirstSection> = ({ appointmentRef }) => {
  return (
    <div id="home" className="relative overflow-hidden">
      <video
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        className="absolute left-0 top-0 w-screen min-w-full h-full object-cover"
      >
        <source src={"/video/compresed_spyder.mp4"} type="video/mp4"></source>
      </video>
      <div
        className="relative flex justify-center items-center h-screen pt-[300px] pb-[100px] min-h-[400px]
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
                    <div className="flex justify-center min-[1200px]:hidden">
                      <button
                        onClick={() => {
                          appointmentRef.current?.showModal();
                        }}
                        className="py-[15px] px-[20px] font-bold 
                text-sm whitespace-nowrap inline-block bg-[#e53e29] leading-[1.8] text-[#fff]  hover:bg-[#F2F6F7] transition-all duration-300 ease-linear hover:text-[#071c1f]"
                      >
                        GET APPOINTMENT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
