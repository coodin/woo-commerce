import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

interface AnimatedButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  icon?: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  title,
  type,
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} relative py-[12px] px-[30px] text-sm bg-[#e53e29] text-white shadow-[0_1px_6px_0_rgba(32,33,36,.28)]
rounded-none flex items-center font-bold font-sans
min-[768px]:text-base min-[768px]:py-[15px] 
min-[991px]:px-[40px] min-[991px]:py-[17px]
hover:text-[#071c1f] hover:bg-[#071c1f] z-[1] transition-all duration-300 ease-in-out
after:content-[''] after:absolute after:z-[-1] after:transition-all after:duration-300 after:ease-in-out
after:w-[0%] after:h-full after:top-0 after:left-0 after:bg-white hover:after:w-full uppercase`}
    >
      {icon}
      <span> {title}</span>
    </button>
  );
};

export default AnimatedButton;
