import CloseSvg from "@/app/icons/close";
import CloseVersionSvg from "@/app/icons/closeVersion";
import { DetailedHTMLProps, DialogHTMLAttributes, RefObject } from "react";

interface CustomDialogProps
  extends DetailedHTMLProps<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {
  children?: React.ReactNode;
  dialogRef: RefObject<HTMLDialogElement>;
  showCloseButton?: boolean;
  classNameForItem?: string;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  dialogRef,
  children,
  className,
  classNameForItem,
  showCloseButton = true,
}) => {
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  return (
    <dialog
      ref={dialogRef}
      className={`${className} 
      `}
    >
      {children}
      {showCloseButton && (
        <button
          className={`${classNameForItem} absolute right-2 top-2 w-fit h-fit`}
          onClick={closeDialog}
        >
          <CloseVersionSvg
            className={` h-8 w-8 fill-[#e53e29] hover:opacity-70 
            transition-all duration-300 ease-in-out`}
          />
        </button>
      )}
    </dialog>
  );
};

export default CustomDialog;
