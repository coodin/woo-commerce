import { DetailedHTMLProps, LiHTMLAttributes, MouseEventHandler } from "react";

interface HoverElementProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children?: React.ReactNode;
  text: string;
  onClickForButton: MouseEventHandler<HTMLButtonElement> | undefined;
}

const HoverElement: React.FC<HoverElementProps> = ({
  children,
  text,
  className,
  onClickForButton,
}) => {
  return (
    <li className={`relative ${className} lg:mr-[10px]  inline-block`}>
      <button
        onClick={onClickForButton}
        className="py-5 px-[10px] block text-sm font-bold text-[#fff]"
      >
        {text}
      </button>
      {children}
    </li>
  );
};

export default HoverElement;
