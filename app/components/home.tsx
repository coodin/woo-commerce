"use client";
import { useState } from "react";
import Header from "./header";
import MobileCartMenu from "./mobileCartMenu";

const Home = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
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
      <div className="relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute left-0 top-0 w-screen min-w-full h-screen object-cover"
        >
          <source src={"/video/dating_video_2.mp4"} type="video/mp4"></source>
        </video>
        <div
          className="relative flex justify-center items-center h-auto pt-[300px] pb-[100px] min-h-[400px]
         min-[767px]:min-h-[400px]  min-[767px]:pt-[200px]
         min-[991px]:min-h-[550px] 
         min-[1199px]:min-h-[800px]  min-[1199px]:h-screen
         before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-[#071c1f4d] before:z-[1]"
        >
          <div className="h-full flex justify-center items-center">
            <div
              className="px-[15px] w-full mx-auto
          min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
            >
              <div className="-mx-[15px] flex justify-center">
                <div
                  className="relative -px-[15px] max-w-full
              min-[992px]:basis-auto min-[992px]:flex-grow-0 min-[992px]:flex-shrink-0 min-[992px]:w-full"
                >
                  <div className="max-w-[850px] mx-auto ">
                    <div className="relative mb-[30px] z-10 w-full min-[1200px]:mb-0">
                      <h6 className="mb-5 opacity-100 visible text-sm min-[767px]:text-base text-center">
                        // TALENTED ENGINEER & MECHANICS
                      </h6>
                      <h1
                        className="text-3xl text-center mb-5 text-white uppercase font-bold leading-[1]
                    min-[767px]:text-[40px] min-[991px]:text-[60px] min-[1200px]:text-[50px]"
                      >
                        Professional Car
                        <br />
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
    </>
  );
};

export default Home;
