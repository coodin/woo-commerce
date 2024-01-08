import { RefObject } from "react";
import CustomDialog from "./ui/customDialog";
import { FooterType } from "@/lib/types";

type FooterModalProviderProps = {
  footerDialogRef: RefObject<HTMLDialogElement>;
  footerItem?: FooterType;
};

const FooterModalProvider: React.FC<FooterModalProviderProps> = ({
  footerDialogRef,
  footerItem,
}) => {
  if (footerItem == undefined) return;
  return (
    <CustomDialog
      className="
      fixed min-h-full w-full z-50 inset-0 overflow-auto bg-transparent m-0 max-w-full  
      "
      dialogRef={footerDialogRef}
    >
      <div
        className="relative top-[50vh] translate-y-[-50%] z-10 min-[576px]:max-w-[540px] mx-auto  
        max-w-[350px] min-[768px]:max-w-[720px]  text-black bg-white rounded-2xl
    py-4  px-3 min-[768px]:py-6"
      >
        <h1 className="font-bold text-2xl mb-2">{footerItem.name}</h1>
        <p className="font-semibold text-base">{footerItem.description}</p>
      </div>
    </CustomDialog>
  );
};

export default FooterModalProvider;
