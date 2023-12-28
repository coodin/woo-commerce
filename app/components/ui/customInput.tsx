"use client";
import {
  ChangeEvent,
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";

interface CustomInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.JSX.Element;
}

const CustomInput: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputProps
> = (
  { type, placeholder, icon, value, onChange, onClick, name, className },
  ref
) => {
  return (
    <div className="relative">
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        className={`${className} appearance-none relative
        bg-white border-[2px] border-solid border-[#e4ecf2]
        h-[65px] pl-5 pr-10 py-[1px] text-base text-[#071c1f] w-full   font-open_sans outline-none focus:border-[#e53e29]
        focus:border-[1px] focus:border-solid placeholder:text-[#071c1f] placeholder:font-open_sans placeholder:text-sm
        `}
      />
      {icon}
    </div>
  );
};

export default forwardRef(CustomInput);
