import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MainHeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  title: string;
  whetherWhite?: boolean;
}

const MainHeading: React.FC<MainHeadingProps> = ({
  title,
  whetherWhite = false,
  className,
}) => {
  return (
    <h1
      className={`${whetherWhite ? "text-white" : "text-[#071c1f] "} 
      ${className} text-2xl font-sans font-bold leading-[1]  mb-[15px]
      min-[575px]:text-[30px] min-[767px]:text-[40px] min-[991px]:text-[50px] min-[1200px]:text-[56px] min-[1400px]:text-[60px]`}
    >
      {title}
      <span className="text-[#e53e29]">.</span>
    </h1>
  );
};

export default MainHeading;
