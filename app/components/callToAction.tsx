"use client";
import { Dispatch, RefObject, SetStateAction, useState } from "react";
import ChildHeading from "./ui/childHeading";
import MainHeading from "./ui/mainHeading";
import UpDownArrowSvg from "../icons/updownArrow";
import DateSvg from "../icons/date";
import CustomSelect from "./ui/customSelect";
import AnimatedButton from "./ui/animatedButton";
import {
  CarInformation,
  // extractedMakeListType,
  // extractedModelListType,
  // makeList,
  // modelList,
  newCars,
  newMakeList,
  newModelList,
} from "@/lib/types";

type CallToActionProps = {
  appointmentRef: RefObject<HTMLDialogElement>;
  setCarInformation: Dispatch<SetStateAction<CarInformation | undefined>>;
};

const CallToAction: React.FC<CallToActionProps> = ({
  appointmentRef,
  setCarInformation,
}) => {
  // const [open, setOpen] = useState(false);
  // const listOne = [
  //   "Service Name",
  //   "Care Repair",
  //   "Engine Repairing",
  //   "Oil Change",
  //   "Car Wash",
  // ] as const;
  // const extractedList = listOne.reduce((prev, current) => {
  //   return current;
  // });

  const handleMake = (item: string) => {
    setFormData({
      ...formData,
      make: item,
    });
  };

  const handleModel = (item: string) => {
    setFormData({
      ...formData,
      model: item,
    });
  };

  // const lol2 = listOne.map((item) => item);
  // type extractedListType = typeof extractedList;
  const [formData, setFormData] = useState<{
    make: string;
    model: string;
  }>({
    make: "Make",
    model: "Model",
  });
  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const [selected, setSelected] =
  //   useState<typeof extractedList>("Service Name");
  // const handleSelectChange = (item: extractedListType) => {
  //   setFormData({
  //     ...formData,
  //     carWash: item,
  //   });
  // };

  return (
    <div className="bg-white">
      <div className="px-[15px] w-full mx-auto">
        {/* Row */}
        <div className="mx-[-15px] flex flex-wrap">
          <div
            className="relative px-[15px] w-full max-w-full min-[1200px]:flex-grow-0 min-[1200px]:basis-auto
          min-[1200px]:w-[91.66666667%] min-[1200px]:ml-[8.33333333%]"
          >
            <div
              className="relative bg-[url(https://tunatheme.com/tf/html/autixir-preview/autixir/img/bg/2.jpg)]
             mt-[-160px] bg-cover bg-[center_center] pt-[115px] pb-[95px] z-[9]
             before:bg-[#071c1f99] before:absolute before:content-[''] 
             before:left-0 before:top-0 before:w-full before:h-full before:z-[-1]"
            >
              {/* Row */}
              <div className="flex flex-wrap mx-[-15px] ">
                <div
                  className="relative flex-shrink-0 w-full max-w-full px-[15px]
                min-[992px]:flex-shrink-0 min-[992px]:flex-grow-0 min-[992px]:basis-auto self-center
                min-[1200px]:w-[41.66666667%]"
                >
                  <div className="pl-[20px] min-[575px]:pl-[100px]">
                    <div className="">
                      <ChildHeading
                        title="Call To Action"
                        whetherWhite={true}
                      />
                      <MainHeading
                        className="max-[767px]:min-w-full min-[767px]:min-w-[320px]"
                        title="Get An Free Service From Us."
                        whetherWhite={true}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative flex-shrink-0 w-full max-w-full px-[15px]
                min-[992px]:flex-shrink-0 min-[992px]:flex-grow-0 min-[992px]:basis-auto self-center
                min-[1200px]:w-[58.33333333%]"
                >
                  <div className="">
                    <form
                      className="px-[30px]"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const car = newCars.find(
                          (item) =>
                            item.make === formData.make &&
                            item.model == formData.model
                        );
                        setCarInformation(car);
                        appointmentRef.current?.showModal();
                      }}
                    >
                      <ul className="flex flex-col min-[767px]:flex-row items-center justify-center">
                        <li className="inline-block mr-5 mt-4">
                          <CustomSelect
                            list={newMakeList}
                            changeColorOfBorder={false}
                            selectedItem={formData.make}
                            selectItem={handleMake}
                            icon={
                              <UpDownArrowSvg className="stroke-[#576466] w-[8px] h-[8px] stroke-[3]" />
                            }
                          />
                        </li>
                        <li className="inline-block mr-5 mt-4">
                          <CustomSelect
                            list={newModelList}
                            changeColorOfBorder={false}
                            selectedItem={formData.model}
                            selectItem={handleModel}
                            icon={
                              <UpDownArrowSvg className="stroke-[#576466] w-[8px] h-[8px] stroke-[3]" />
                            }
                          />
                        </li>

                        {/* <li className="inline-block mr-5 mt-4"> */}
                        {/* <select
                            name="carWash"
                            className="hidden"
                            value={formData.carWash}
                            onChange={handleInputChange}
                          >
                            {listOne.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })} */}
                        {/* <option value={"Service Name"}>Service Name</option>
                            <option value={""}>Car Repair </option>
                            <option>Engine Repairing </option>
                            <option>Oil Change</option>
                            <option>Car Wash</option> */}
                        {/* </select> */}
                        {/* <div
                            onClick={() => setOpen((state) => !state)}
                            className="relative bg-transparent border-[2px] border-solid border-[#576466]
                          m-0 h-[60px] w-auto min-w-[200px] leading-[58px] pr-10 pl-5 rounded-none 
                           text-base font-bold font-sans cursor-pointer
                           transition-all duration-200 ease-in-out select-none"
                          >
                            <div
                              className={`${
                                open ? "-rotate-90" : "rotate-90"
                              } absolute right-5 top-[50%] translate-y-[-50%] transition-all duration-150 ease-in-out `}
                            >
                              <UpDownArrowSvg className="stroke-[#576466] w-[8px] h-[8px] stroke-[3]" />{" "}
                            </div>
                            <span
                              className="text-white uppercase leading-[58px] text-base font-bold font-sans
                            cursor-pointer"
                            >
                              {formData.carWash}
                            </span>
                            <ul
                              className={`
                              ${
                                open
                                  ? "opacity-100 pointer-events-auto scale-100 translate-y-0"
                                  : "opacity-0 pointer-events-none scale-75 translate-y-[-21px] "
                              }
                              absolute top-full left-0 min-w-full bg-white 
                              rounded-[5px] shadow-[0_0_0_1px_rgba(68,68,68,.11)]
                            mt-1  overflow-hidden p-0 origin-[50%_0] 
                            transition-all duration-200 ease-[cubic-bezier(.5,0,0,1.25)] z-[9]`}
                            >
                              {listOne.map((item, index) => {
                                return (
                                  <li
                                    onClick={() => handleSelectChange(item)}
                                    className={`${
                                      item === formData.carWash
                                        ? "bg-[#f6f6f6] font-bold"
                                        : " font-semibold"
                                    }
                                     py-[10px] leading-[1.8] 
                                  cursor-pointer min-h-[40px] pl-[18px] pr-[29px] 
                                  transition-all duration-200  text-[#071c1f]
                                    `}
                                    key={index}
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li> */}
                        {/* <li className="inline-block mr-5 mt-4">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="DATE"
                              className="bg-transparent text-white border-[#576466] font-bold h-[60px]
                              border-2 border-solid pl-5  pr-10 py-[1px] text-base w-full  rounded-none
                              focus:outline-none focus:border focus:border-solid placeholder:text-white"
                            />
                            <DateSvg
                              className="absolute top-[50%] translate-y-[-50%] right-5 
                            w-4 h-4  fill-white"
                            />
                          </div>
                        </li> */}
                        <li className="inline-block mr-5 mt-4">
                          <div className="">
                            <button
                              type="submit"
                              className="py-5 px-8 font-bold text-sm whitespace-nowrap
                    inline-block bg-[#e53e29] leading-[1.8]
                  text-[#fff]  hover:bg-[#F2F6F7] transition-all duration-300 ease-linear
                   hover:text-[#071c1f]"
                            >
                              GET APPOINTMENT
                            </button>
                          </div>
                        </li>
                        {/* <button type="submit">Submit</button> */}
                      </ul>
                    </form>
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

export default CallToAction;
