import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ChildHeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  title: string;
  whetherWhite?: boolean;
}

const ChildHeading: React.FC<ChildHeadingProps> = ({
  title,
  whetherWhite = false,
  className,
}) => {
  return (
    <h6
      className={`${whetherWhite ? "text-white" : "text-[#e53e29] "}
      ${className}
      text-[14px] min-[768px]:text-[15px] min-[992px]:text-[16px] uppercase mb-[15px] font-bold`}
    >
      {title}
    </h6>
  );
};

export default ChildHeading;
