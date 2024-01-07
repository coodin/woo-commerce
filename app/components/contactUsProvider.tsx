import { RefObject, useRef, useState } from "react";
import CustomDialog from "./ui/customDialog";
import CustomInput from "./ui/customInput";
import PencilSvg from "../icons/pencil";
import Link from "next/link";
import MessageSvg from "../icons/message";
import CallSvg from "../icons/call";
import NavigationSvg from "../icons/navigation";
import Map from "./map";

type ContactUsProviderProps = {
  contactRef: RefObject<HTMLDialogElement>;
};

const ContactUsProvider: React.FC<ContactUsProviderProps> = ({
  contactRef,
}) => {
  const [formData, setFormData] = useState<{
    name: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
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
  return (
    <CustomDialog
      dialogRef={contactRef}
      className="fixed min-h-full w-full z-50 inset-0 py-16 overflow-auto bg-transparent m-0 max-w-full"
    >
      <div
        className={`
        relative mx-auto max-h-fit overflow-visible bg-white z-10
           my-0 px-4  py-10  min-[768px]:px-8 
        shadow-search rounded-md w-full 
        min-[576px]:max-w-[540px]
      min-[768px]:max-w-[720px] 
      min-[1199px]:max-w-[1100px]
    `}
      >
        <div className="flex flex-col gap-y-10 justify-start bg-white">
          {/* Contact US */}
          <div className="flex flex-wrap  gap-x-0 min-[768px]:gap-x-[20px]  min-[1199px]:gap-x-[30px]  gap-y-4">
            {/* First */}
            <div className="hidden min-[768px]:flex min-[768px]:flex-wrap min-[768px]:content-start min-[1199px]:content-stretch    min-[768px]:basis-[calc(40%)] min-[1199px]:basis-[calc(50%-15px)]">
              <h2 className=" relative top-0 w-full text-5xl font-bold mb-3 ">
                Contact Us
              </h2>
              {/* Row */}
              <div
                className="relative min-[1199px]:-top-10 flex flex-wrap content-start 
                 gap-y-8 min-[1199px]:gap-x-[15px] min-[1199px]:gap-y-4   w-full  "
              >
                {[
                  {
                    href: "tel:+123-456-789",
                    logo: <CallSvg className="w-8 h-8 fill-[#e53e29]" />,
                    title: "+123-456-789",
                    secondTitle: "Make A Call",
                  },
                  {
                    href: "mailto:info@Webmail.com",
                    logo: <MessageSvg className="w-10 h-10 fill-[#e53e29]" />,
                    title: "info@Webmail.com",
                    secondTitle: "Support Mail",
                  },
                  {
                    logo: (
                      <NavigationSvg className="w-10 h-10 fill-[rgba(229,62,41,0.3)] " />
                    ),
                    title: "12A, New Your, USA",
                    secondTitle: "Office Address",
                  },
                ].map((item, index) => {
                  return item.href ? (
                    <Link
                      href={item.href}
                      key={index}
                      className="flex justify-center items-center   shadow-search min-[992px]:mb-0  bg-white  py-3 px-2 
              basis-full  min-[1199px]:basis-[calc(50%-10px)]  h-fit rounded-xl "
                    >
                      {/* Logo */}
                      <div className="">{item.logo}</div>
                      <div className="ml-2">
                        <h2 className="text-sm grayscale-[1] text-black/60 font-semibold">
                          {item.title}
                        </h2>
                        <h1 className="text-2xl text-black font-bold">
                          {item.secondTitle}
                        </h1>
                      </div>
                    </Link>
                  ) : (
                    <button
                      key={index}
                      className="flex pointer-events-none justify-center shadow-search mb-[10px] min-[992px]:mb-0 items-center  bg-white  py-3 px-2 
                        basis-full min-[1199px]:basis-[calc(50%-10px)]  h-fit rounded-xl "
                    >
                      {/* Logo */}
                      <div className="">{item.logo}</div>
                      <div className="ml-2">
                        <h2 className="text-sm grayscale-[1] text-black/60 font-semibold">
                          {item.title}
                        </h2>
                        <h1 className="text-2xl text-black font-bold">
                          {item.secondTitle}
                        </h1>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Second */}
            <div className="basis-full min-[768px]:basis-[calc(60%-20px)]  min-[1199px]:basis-[calc(50%-15px)]">
              <h2 className="relative top-1 w-full text-3xl font-bold mb-3">
                Contact Us
              </h2>
              <form
                className="flex flex-wrap gap-x-5 gap-y-4 justify-end"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Worked", formData);
                }}
              >
                <div className="basis-full min-[1199px]:basis-[calc(50%-10px)]">
                  <CustomInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="flex-1"
                  />
                </div>
                <div className="basis-full min-[1199px]:basis-[calc(50%-10px)]">
                  <CustomInput
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="flex-1"
                  />
                </div>
                <div className="basis-full">
                  <CustomInput
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="flex-1"
                  />
                </div>
                <div className="basis-full">
                  <CustomInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="flex-1"
                  />
                </div>
                <div className="relative basis-full mb-2">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Message"
                    className=" resize-y px-[15px] py-5 min-h-[150px] bg-white font-open_sans outline-none
               border-solid border-[2px] border-[#e4ecf2] text-base text-[#071c1f] w-full  rounded-none
               focus:border-[#e53e29] focus:border focus:border-solid 
               placeholder:text-[#071c1f] placeholder:font-open_sans placeholder:text-sm"
                  />
                  <PencilSvg className="absolute w-4 h-4 right-4 top-4 fill-[#e53e29]" />
                </div>
                <button
                  type="submit"
                  className="py-[15px] px-[20px] font-bold  rounded-lg
                        text-sm whitespace-nowrap inline-block bg-[#e53e29] 
                        leading-[1.8] text-[#fff]  hover:bg-[#F2F6F7]
                         transition-all duration-300 ease-linear hover:text-[#071c1f]"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
          {/* Our Location */}
          <div className="flex flex-wrap content-center">
            {/* First */}
            <div className=" flex items-center basis-full min-[768px]:basis-[40%]">
              <div className="relative -top-5 min-[768px]:-top-10">
                <h2 className="text-3xl font-bold  mb-1">Our Location</h2>
                <p className="text-lg font-semibold">
                  You can reach us in person to see our models
                </p>
              </div>
            </div>
            {/* Second */}
            <div className="basis-full min-[768px]:basis-[60%] ">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default ContactUsProvider;
