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
          className={`${classNameForItem} absolute right-[10px] top-[10px] min-[768px]:right-[15px] min-[768px]:top-[15px] w-fit h-fit `}
          onClick={closeDialog}
        >
          <CloseVersionSvg
            className={` h-8 w-8 min-[768px]:h-12 min-[768px]:w-12 fill-white hover:opacity-80 
            transition-all duration-300 ease-in-out`}
          />
        </button>
      )}
      <div
        onClick={() => {
          dialogRef.current?.close();
        }}
        className="fixed inset-0 -z-10 bg-black/60 "
      ></div>
    </dialog>
  );
};

export default CustomDialog;
