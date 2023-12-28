import ArrowDownSvg from "@/app/icons/arrowDown";
import UpDownArrowSvg from "@/app/icons/updownArrow";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

interface CustomHTMLAttributes extends HTMLAttributes<HTMLDivElement> {
  classNameForItem?: string | undefined;
}

interface CustomSelectProps<T>
  extends DetailedHTMLProps<CustomHTMLAttributes, HTMLDivElement> {
  list: readonly T[];
  selectedItem: T;
  selectItem: (item: T) => void;
  icon?: React.JSX.Element;
  changeColorOfBorder?: boolean;
}

const CustomSelect = <T,>({
  list,
  selectedItem,
  selectItem,
  icon = <ArrowDownSvg className="w-7 h-7 fill-[#e53e29] -rotate-90 " />,
  className,
  classNameForItem,
  changeColorOfBorder = true,
}: CustomSelectProps<T>) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
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
      <div
        onClick={() => setOpen((state) => !state)}
        className={`
        relative bg-transparent border-[2px] border-solid ${
          changeColorOfBorder ? "border-[#e5eaee]" : "border-[#576466]"
        } 
    m-0 h-[60px] w-auto min-w-[200px] leading-[58px] pl-[18px] pr-[30px] rounded-none 
     text-base font-bold font-sans cursor-pointer
     transition-all duration-200 ease-in-out select-none`}
      >
        <div
          className={`${
            open ? "-rotate-90" : "rotate-90"
          } absolute right-5 top-[50%] translate-y-[-50%] transition-all duration-150 ease-in-out `}
        >
          {icon}
        </div>
        <span
          className={`${classNameForItem} 
          text-white  leading-[58px] text-base font-bold font-sans
          cursor-pointer antialiased `}
        >
          {selectedItem as string}
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
          {list.map((item, index) => {
            return (
              <li
                onClick={() => selectItem(item)}
                className={`${
                  item === selectedItem
                    ? "bg-[#f6f6f6] font-bold"
                    : " font-semibold"
                }
               py-[10px] leading-[1.8] 
            cursor-pointer min-h-[40px] pl-[18px] pr-[29px] 
            transition-all duration-200  text-[#071c1f]
              `}
                key={index}
              >
                {item as string}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
