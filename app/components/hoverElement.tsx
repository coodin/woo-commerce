import { DetailedHTMLProps, LiHTMLAttributes } from "react";

interface HoverElementProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children?: React.ReactNode;
  text: string;
}

const HoverElement: React.FC<HoverElementProps> = ({
  children,
  text,
  className,
}) => {
  return (
    <li className={`relative ${className} lg:mr-[10px]  inline-block`}>
      <a href="" className="py-5 px-[10px] block text-sm text-[#fff]">
        {text}
      </a>
      {children}
    </li>
  );
};

export default HoverElement;
