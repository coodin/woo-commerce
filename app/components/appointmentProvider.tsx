import { RefObject, useEffect, useRef, useState } from "react";
import CustomDialog from "./ui/customDialog";
import CustomInput from "./ui/customInput";
import ProfileVersionSvg from "../icons/profileVersion";
import CallVersionSvg from "../icons/callVersion";
import EmailSvg from "../icons/email";
import CustomSelect from "./ui/customSelect";
import CustomSubHeader from "./ui/customSubHeader";
import PencilSvg from "../icons/pencil";
import DateSvg from "../icons/date";
import {
  CarInformation,
  extractedMakeListType,
  extractedModelListType,
  extractedYearListType,
  makeList,
  modelList,
  yearList,
} from "@/lib/types";

type AppointmentProviderProps = {
  appointmentRef: RefObject<HTMLDialogElement>;
  carInformation?: CarInformation;
};

const AppointmentProvider: React.FC<AppointmentProviderProps> = ({
  appointmentRef,
  carInformation,
}) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const openDatePicker = () => {
    const input = dateRef.current;
    if (input) {
      input.showPicker();
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(carInformation);
  }, [carInformation]);

  const handleMake = (item: extractedMakeListType) => {
    setFormData({
      ...formData,
      make: item,
    });
  };

  const handleModel = (item: extractedModelListType) => {
    setFormData({
      ...formData,
      model: item,
    });
  };

  const handleYear = (item: extractedYearListType) => {
    setFormData({
      ...formData,
      year: item,
    });
  };

  const specialOffersList = [
    "Select offers",
    "$20 Off A/C Recharge or Repairs",
    "$25 Off Brake Service",
  ] as const;

  type extractedspecialOffersListType = (typeof specialOffersList)[number];

  const handleSpecialOffers = (item: extractedspecialOffersListType) => {
    setFormData({
      ...formData,
      specialOffers: item,
    });
  };

  const waitOrDropOffList = [
    "Please Choose",
    "Waiting",
    "Dropping Off Vehicle",
  ] as const;

  type waitOrDropOffListType = (typeof waitOrDropOffList)[number];

  const handlewaitOrDropOff = (item: waitOrDropOffListType) => {
    setFormData({
      ...formData,
      waitOrDropOff: item,
    });
  };

  const locationList = [
    "Location",
    "Melbourne (9)",
    "Berlin (12)",
    "New York (5)",
    "london (7)",
  ] as const;

  type locationListType = (typeof locationList)[number];

  const handleLocation = (item: locationListType) => {
    setFormData({
      ...formData,
      location: item,
    });
  };

  const hourList = [
    "HH:MM",
    "9:00 AM - 11:00 AM",
    "11:00 AM - 13:00 PM",
    "13:00 PM - 15:00 PM",
    "15:00 PM - 17:00 PM",
    "17:00 PM - 19:00 PM",
  ] as const;

  type hourListListType = (typeof hourList)[number];

  const handleHour = (item: hourListListType) => {
    setFormData({
      ...formData,
      hour: item,
    });
  };

  const [formData, setFormData] = useState<{
    name: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    message: string;
    date?: string;
    make: extractedMakeListType;
    model: extractedModelListType;
    year: extractedYearListType;
    specialOffers: extractedspecialOffersListType;
    waitOrDropOff: waitOrDropOffListType;
    location: locationListType;
    hour: hourListListType;
  }>({
    name: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
    date: "",
    make: "Make",
    model: "Model",
    year: "Year",
    specialOffers: "Select offers",
    waitOrDropOff: "Please Choose",
    location: "Location",
    hour: "HH:MM",
  });

  return (
    <div className="">
      <CustomDialog
        dialogRef={appointmentRef}
        className="  h-[80vh]  !fixed top-[10%]   left-0 backdrop:bg-black/50 my-0 px-4 
        min-[768px]:px-8 py-10 pb-[60px]
        shadow-search rounded-md w-full 
        min-[576px]:max-w-[540px]
      min-[768px]:max-w-[720px] 
      min-[992px]:max-w-[960px]"
      >
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
          }}
        >
          {/* First Part */}
          <CustomSubHeader text="Personal information" />
          {/* Row */}
          <div className="flex flex-wrap  gap-x-0 min-[768px]:gap-x-[30px] gap-y-4 mb-10">
            <div className="w-full min-[768px]:w-[calc(50%_-_30px)] ">
              <CustomInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="First name"
                icon={
                  <ProfileVersionSvg
                    className="absolute right-3 top-[50%] 
                  translate-y-[-50%] w-5 h-5 fill-[#e53e29]   "
                  />
                }
              />
            </div>
            <div className="w-full min-[768px]:w-[calc(50%)] ">
              <CustomInput
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                icon={
                  <ProfileVersionSvg
                    className="absolute right-3 top-[50%] 
                  translate-y-[-50%] w-5 h-5 fill-[#e53e29] stroke-[#e53e29] "
                  />
                }
              />
            </div>

            <div className="w-full min-[768px]:w-[calc(50%_-_30px)] ">
              <CustomInput
                type="text"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                placeholder="Email address"
                icon={
                  <EmailSvg
                    className="absolute right-3 top-[50%] 
                  translate-y-[-50%] w-5 h-5 fill-[#e53e29] stroke-[#e53e29]"
                  />
                }
              />
            </div>

            <div className="w-full min-[768px]:w-[calc(50%)] ">
              <CustomInput
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone number"
                icon={
                  <CallVersionSvg
                    className="
              absolute right-3 top-[50%] 
              translate-y-[-50%] w-5 h-5 fill-[#e53e29] stroke-[#e53e29]"
                  />
                }
              />
            </div>
          </div>
          {/* Second Part */}
          <CustomSubHeader text="Vehicles Information" />
          {/* Second Row */}
          <div className="flex flex-wrap  min-[768px]:gap-x-[30px] gap-y-4 mb-10">
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.333]">
              <CustomSelect
                className=""
                classNameForItem="!text-[#071c1f] !font-open_sans !text-sm "
                list={makeList}
                selectedItem={
                  formData.make === "Make"
                    ? carInformation?.make ?? "Make"
                    : formData.make
                }
                selectItem={handleMake}
              />
            </div>
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.333]">
              <CustomSelect
                classNameForItem="!text-[#071c1f] !font-open_sans !text-sm "
                list={modelList}
                selectedItem={
                  formData.model === "Model"
                    ? carInformation?.model ?? "Model"
                    : formData.model
                }
                selectItem={handleModel}
              />
            </div>
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.333]">
              <CustomSelect
                classNameForItem="!text-[#071c1f] !font-open_sans !text-sm "
                list={yearList}
                selectedItem={
                  formData.year === "Year"
                    ? carInformation?.year ?? "Year"
                    : formData.year
                }
                selectItem={handleYear}
              />
            </div>
            {/* to be consistent with preceding ui I have written this div to take gap between last two div */}
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:hidden"></div>
          </div>
          {/* Agree Section */}
          <div className="w-full">
            <p className="text-[#071c1f] mb-6">
              <label className="flex items-center text-sm font-open_sans font-normal w-max">
                <input
                  name="agree"
                  type="checkbox"
                  className="w-[13px] h-[13px] mr-2"
                />
                My vehicle is not listed in the form above..
              </label>
            </p>
          </div>
          <CustomSubHeader text=" What type of service do you need on your vehicle?" />
          {/* Message */}
          <div className="relative w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter Message"
              className=" resize-y px-[15px] py-5 min-h-[150px] bg-white font-open_sans outline-none
               border-solid border-[2px] border-[#e4ecf2] text-base text-[#071c1f] w-full mb-[30px] rounded-none
               focus:border-[#e53e29] focus:border focus:border-solid 
               placeholder:text-[#071c1f] placeholder:font-open_sans placeholder:text-sm"
            />
            <PencilSvg className="absolute w-4 h-4 right-4 top-4 fill-[#e53e29]" />
          </div>
          {/* Third Row */}
          <div className="flex flex-wrap  min-[768px]:gap-x-[30px] gap-y-4 mb-10">
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.333]">
              <CustomSubHeader text="Special Offers" />
              <CustomSelect
                classNameForItem="!text-[#071c1f] !font-open_sans !text-sm "
                list={specialOffersList}
                selectedItem={formData.specialOffers}
                selectItem={handleSpecialOffers}
              />
            </div>
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.333]">
              <CustomSubHeader text="Wait or Droping Off" />
              <CustomSelect
                classNameForItem="!text-[#071c1f] !font-open_sans !text-sm "
                list={waitOrDropOffList}
                selectedItem={formData.waitOrDropOff}
                selectItem={handlewaitOrDropOff}
              />
            </div>
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.333]">
              <CustomSubHeader text="Choose Location" />
              <CustomSelect
                classNameForItem="!text-[#071c1f] !font-open_sans !text-sm "
                list={locationList}
                selectedItem={formData.location}
                selectItem={handleLocation}
              />
            </div>
            {/* to be consistent with preceding ui I have written this div to take gap between last two div */}
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:hidden"></div>
          </div>
          {/* Fourth Row */}
          <CustomSubHeader text="First Choice" />
          <div className="flex flex-wrap justify-start  min-[768px]:gap-x-[30px]  mb-[30px]">
            <div className="relative w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.25]">
              <CustomInput
                ref={dateRef}
                className="!px-10 !py-[6px] !text-[#071c1f] !font-open_sans !text-sm !font-bold"
                type="date"
                name="date"
                placeholder="Select Date"
                icon={
                  <DateSvg
                    className="absolute  left-[15px] top-[50%] stroke-[2] stroke-[#e53e29]
                    translate-y-[-50%] w-[18px] h-[18px]"
                  />
                }
                value={formData.date}
                onChange={handleInputChange}
                onClick={openDatePicker}
              />
            </div>
            <div className="w-full min-[768px]:flex-[0.5]  min-[992px]:flex-[0.25]">
              <CustomSelect
                classNameForItem="!text-[#071c1f] !font-open_sans !text-sm "
                list={hourList}
                selectedItem={formData.hour}
                selectItem={handleHour}
              />
            </div>
          </div>
          <div
            className="relative rounded-none py-5 px-[30px] mb-[30px] text-[#664d03] bg-[#fff3cd]
             font-open_sans font-normal border-[#ffecb5] border border-solid text-sm"
          >
            Please note that the date and time you requested may not be
            available. We will contact you to confirm your actual appointment
            details.
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="relative py-[12px] px-[30px] text-sm bg-[#e53e29] text-white shadow-[0_1px_6px_0_rgba(32,33,36,.28)]
                    rounded-none flex items-center font-bold font-sans
                    min-[768px]:text-base min-[768px]:py-[15px] 
                    min-[991px]:px-[40px] min-[991px]:py-[17px] border border-solid border-transparent
                     hover:text-[#071c1f] hover:bg-[#071c1f] z-[1] transition-all duration-300 ease-in-out
                    after:content-[''] after:absolute after:z-[-1] after:transition-all after:duration-300 after:ease-in-out
                    after:w-[0%] after:h-full after:top-0 after:left-0 after:bg-white hover:after:w-full 
                    uppercase"
            >
              Submit Now
            </button>
          </div>
        </form>
      </CustomDialog>
    </div>
  );
};

export default AppointmentProvider;
