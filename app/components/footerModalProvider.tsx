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
  return (
    <CustomDialog
      className="min-[576px]:max-w-[540px]
    min-[768px]:max-w-[720px] 
    py-4  px-3 min-[768px]:py-6"
      dialogRef={footerDialogRef}
    >
      <div className="">
        <h1 className="font-bold text-2xl mb-2">{footerItem?.name}</h1>
        <p className="font-semibold text-base">{footerItem?.description}</p>
      </div>
    </CustomDialog>
  );
};

export default FooterModalProvider;
