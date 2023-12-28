import { DetailedHTMLProps, LiHTMLAttributes } from "react";

interface HoverElementProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children?: React.ReactNode;
  text: string;
  href?: string;
}

const HoverElement: React.FC<HoverElementProps> = ({
  children,
  text,
  className,
  href,
}) => {
  return (
    <li className={`relative ${className} lg:mr-[10px]  inline-block`}>
      <a
        href={href}
        className="py-5 px-[10px] block text-sm font-bold text-[#fff]"
      >
        {text}
      </a>
      {children}
    </li>
  );
};

export default HoverElement;
