import CloseVersionSvg from "@/app/icons/closeVersion";
import PrevSvg from "@/app/icons/prev";
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import NextSvg from "@/app/icons/next";

interface DialogProps<T extends { imgSrc: string }>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
  list: T[];
  defaultActive: number;
  classNameForItem?: string;
}

const Dialog = <T extends { imgSrc: string }>({
  status,
  setStatus,
  list,
  defaultActive,
  className,
  classNameForItem,
}: DialogProps<T>) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(defaultActive);
  }, [defaultActive]);

  const rightEvent = () => {
    if (list.length - 1 > active) {
      setActive((prev) => prev + 1);
    }
  };

  const leftEvent = () => {
    if (active > 0) {
      setActive((prev) => prev - 1);
    }
  };
  return (
    <div
      className={`${className} fixed flex justify-center items-center inset-0 z-50 bg-black/10
      transition-all ${
        status
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Left Button */}
      <button
        onClick={leftEvent}
        disabled={active == 0}
        className={`absolute min-[640px]:top-[50%] bottom-4 left-4 min-[640px]:translate-y-[-50%] disabled:opacity-50 disabled:hover:bg-white group
          hover:bg-[#e53e29] bg-white before:hidden 
          min-[640px]:w-[50px] w-10 min-[640px]:h-[50px] h-10 leading-[48px] 
                        !border !border-solid !border-[#e6ecf0] !rounded-full !text-center
                       !text-xl !text-[#071c1f] !z-[1]
                       transition-all duration-300 ease-in-out
                       
                        `}
      >
        <PrevSvg
          className="fill-[#071c1f] -rotate-180 group-hover:fill-white group-disabled:fill-[#071c1f]
              absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5 h-5
              transition-all duration-300 ease-in-out"
        />
      </button>
      {/* Right Button */}
      <button
        onClick={rightEvent}
        disabled={active == list.length - 1}
        className={`absolute min-[640px]:top-[50%] bottom-4 right-4 disabled:opacity-50 disabled:hover:bg-white group
         min-[640px]:translate-y-[-50%]  hover:bg-[#e53e29] bg-white before:hidden 
        min-[640px]:w-[50px] w-10 min-[640px]:h-[50px]  h-10  leading-[48px] 
                        !border !border-solid !border-[#e6ecf0] !rounded-full !text-center
                       !text-xl !text-[#071c1f] !z-[1]
                       transition-all duration-300 ease-in-out
                        `}
      >
        <NextSvg
          className="fill-[#071c1f] absolute  group-hover:fill-white group-disabled:fill-[#071c1f]
                top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5 h-5
               transition-all duration-300 ease-in-out"
        />
      </button>
      <div
        className={`${classNameForItem} relative   overflow-hidden    rounded-lg bg-[#333]  z-10 
        w-[50%] min-h-[50vh] min-w-[50vh] max-h-[50vh] aspect-[5/6] flex-grow-1
            backdrop:opacity-90
          min-[768px]:aspect-square min-[992px]:aspect-[10/8] min-[992px]:max-h-[80vh] min-[992px]:min-w-[60vw]  `}
      >
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 ${
                active == index ? "opacity-100 " : "opacity-0"
              } transition-all duration-200 ease-in-out w-full h-full `}
            >
              <img
                className="w-full h-full object-cover object-[center_center]"
                src={item.imgSrc}
              />
            </div>
          );
        })}
      </div>
      {/* Backdrop */}
      <div
        className="absolute left-0 top-0 bottom-0 right-0 bg-[#333] opacity-100 min-[640px]:opacity-90"
        onClick={() => setStatus(false)}
      ></div>
      {/* Close Button */}
      <button
        onClick={() => setStatus(false)}
        className="absolute right-4 top-4"
      >
        <CloseVersionSvg
          className={`min-[640px]:h-12 h-8 min-[640px]:w-12 w-8 fill-[#ffffff99] hover:fill-[#fff]
            transition-all duration-300 ease-in-out`}
        />
      </button>
    </div>
  );
};

export default Dialog;
