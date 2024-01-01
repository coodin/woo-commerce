import { RefObject } from "react";
import CustomDialog from "./ui/customDialog";
import { BlogType } from "@/lib/types";
import DateSvg from "../icons/date";
import { convertDate } from "@/lib/utils";
import ProfileSvg from "../icons/profile";
import ServiceSvg from "../icons/service";

type BlogModalProviderProps = {
  dialogRef: RefObject<HTMLDialogElement>;
  blog?: BlogType;
};

const BlogModalProvider: React.FC<BlogModalProviderProps> = ({
  dialogRef,
  blog,
}) => {
  return (
    <CustomDialog
      classNameForItem={"!right-0 !top-0"}
      dialogRef={dialogRef}
      className=" rounded-2xl backdrop:bg-black/30 
      min-[576px]:max-w-[540px] min-[768px]:max-w-[720px]  w-full overflow-y-scroll"
    >
      <div className="py-8 px-4">
        <div className="flex flex-col">
          <img className="object-cover rounded-2xl" src={blog?.imageUrl} />
          <div className="flex gap-x-2 items-center w-full mt-4 text-sm min-[768px]:text-base">
            <div className=" flex  items-center text-[#071c1f] font-bold ">
              {" "}
              <DateSvg className="w-3 h-3 fill-[#e53e29] mr-[5px]" />
              {convertDate(blog?.date ?? new Date())}
            </div>
            <div className="flex items-center text-[#071c1f] font-bold">
              <ProfileSvg className="w-[12px] h-[12px] fill-[#e53e29] mr-[5px]" />
              by:{blog?.role}
            </div>
            <div className="flex items-center text-[#071c1f] font-bold ">
              <ServiceSvg className="w-[12px] h-[12px] fill-[#e53e29] mr-[5px]" />
              {blog?.service}
            </div>
          </div>
          <h3 className="font-bold mt-2 mb-2 text-xl min-[768px]:text-2xl ">
            {blog?.title}
          </h3>
          <p className="text-base  min-[768px]:text-lg font-semibold  !leading-6 min-[768px]:!leading-7">
            {blog?.description}
          </p>
        </div>
      </div>
    </CustomDialog>
  );
};

export default BlogModalProvider;
