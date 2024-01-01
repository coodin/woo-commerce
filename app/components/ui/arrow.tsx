"use client";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useState,
} from "react";

interface ArrowProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  myStyle?: React.CSSProperties;
}
const Arrow: React.FC<ArrowProps> = ({ onClick, children, myStyle }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  if (!state) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      style={myStyle}
      className={`
     !absolute !top-[50%] -translate-y-[50%] hover:!bg-[#e53e29] !bg-white before:hidden group/arrow
                        !w-[50px] !h-[50px] !leading-[48px] 
                        !border !border-solid !border-[#e6ecf0] !rounded-full !text-center
                       !text-xl !text-[#071c1f] !z-[1]
                       transition-all duration-300 ease-in-out
                       !opacity-0 !invisible group-hover/first:!visible group-hover/first:!opacity-100
                        `}
    >
      {children}
    </button>
  );
};

export default Arrow;
