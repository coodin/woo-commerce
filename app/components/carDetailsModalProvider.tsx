import { RefObject, useEffect, useState } from "react";
import CustomDialog from "./ui/customDialog";
import { formatter } from "@/lib/utils";
import AnimatedButton from "./ui/animatedButton";
import BasketSvg from "../icons/basket";
import { CarInformation } from "@/lib/types";
import Dialog from "./ui/dialog";

type CarDetailsModalProviderProps = {
  dialogRef: RefObject<HTMLDialogElement>;
  appointmentRef: RefObject<HTMLDialogElement>;
  carInformation?: CarInformation;
};

const CarDetailsModalProvider: React.FC<CarDetailsModalProviderProps> = ({
  dialogRef,
  carInformation,
  appointmentRef,
}) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [status, setStatus] = useState(false);
  // useEffect(() => {
  //   setCurrentImage(carInformation?.img);
  // }, []);

  return (
    <CustomDialog
      className="fixed min-h-full w-full z-50 inset-0 py-16 overflow-auto bg-transparent m-0 max-w-full  
      "
      dialogRef={dialogRef}
    >
      <Dialog
        status={status}
        setStatus={setStatus}
        defaultActive={0}
        list={
          carInformation?.imgUrlList.map((item) => {
            return { imgSrc: item };
          }) ?? [{ imgSrc: "" }]
        }
      />
      <div
        className="relative  max-h-fit overflow-visible shadow-search mx-auto min-[768px]:top-10
        max-w-[350px]  min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] bg-white rounded-2xl 
      "
      >
        <div
          className="flex flex-wrap justify-evenly min-[992px]:justify-around items-center min-[992px]:gap-x-2 
         min-[992px]:px-5 pb-8 pt-6 min-[768px]:py-4  min-[992px]:py-6 "
        >
          {/* Img */}
          <div className="w-full min-[768px]:flex-[0.6] min-[768px]:max-w-[50%] px-4 min-[992px]:px-0 ">
            <div
              onClick={() => {
                setStatus(true);
              }}
              className="cursor-pointer"
            >
              <img
                className="w-full h-full"
                src={currentImage != null ? currentImage : carInformation?.img}
              />
            </div>
            <div className="overflow-x-scroll">
              <div className="flex gap-x-3 min-w-max ">
                {carInformation?.imgUrlList.map((url, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(url)}
                      className={`${
                        url === currentImage
                          ? "border-2 border-solid border-[#e5e7eb]"
                          : ""
                      } w-28 h-28 p-1  rounded-md `}
                    >
                      <img
                        key={index}
                        src={url}
                        className={`w-full h-full object-cover`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="w-full max-w-full min-[768px]:flex-[0.4]  min-[768px]:max-w-[50%]  px-4 min-[992px]:px-0 self-start ">
            <div className="">
              <h2 className="mt-6 mb-1 min-[768px]:mb-2 min-[992px]:mb-3 min-[768px]:mt-3 min-[992px]:mt-4 text-xl min-[992px]:text-2xl font-bold">
                {carInformation?.title}
              </h2>
              <p className=" font-semibold text-base min-[992px]:text-lg mb-2">
                {carInformation?.description}
              </p>
              {/* Priceses */}
              <div className="">
                {/* Price */}
                <span className="font-open_sans text-base min-[992px]:text-lg text-[#e53e29] font-bold mr-4">
                  {formatter.format(carInformation?.price ?? 0).slice(0, -3)}
                </span>
                {/* Previous Price  */}
                <span className="font-open_sans text-sm min-[992px]:text-base text-[#e53e29] font-semibold opacity-60 line-through">
                  {formatter
                    .format(carInformation?.fromPrice ?? 0)
                    .slice(0, -3)}
                </span>
              </div>
              {/* Specifications */}
              <div className="">
                <ul className="flex flex-col my-2 py-3 gap-y-1 border-t border-b border-solid border-[#e1e6ff]">
                  {carInformation?.categories?.map((item, index) => {
                    return (
                      <li key={index} className="flex">
                        <span className="font-medium mr-4 text-lg min-[992px]:text-xl">
                          Categories:
                        </span>
                        <div className="flex gap-x-2 text-[#071c1f] font-semibold text-base min-[992px]:text-lg">
                          <span className="">{item.first},</span>
                          <span className="">{item.second},</span>
                          <span className="">{item.third},</span>
                          <span className="">{item.fourth},</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-4">
                <AnimatedButton
                  className="border border-solid border-transparent group/button 
                  min-[768px]:!text-sm min-[992px]:!text-base"
                  title="Add to Cart"
                  icon={
                    <BasketSvg className="w-5 h-5 fill-white mr-2 group-hover/button:fill-[#071c1f]" />
                  }
                  onClick={() => {
                    dialogRef.current?.close();
                    appointmentRef.current?.showModal();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default CarDetailsModalProvider;
