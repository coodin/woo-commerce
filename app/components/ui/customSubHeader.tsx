type CustomSubHeader = {
  text: string;
  classNameForItem?: string;
};

const CustomSubHeader: React.FC<CustomSubHeader> = ({
  text,
  classNameForItem,
}) => {
  return (
    <h6
      className={`${classNameForItem} text-[#071c1f] font-bold leading-[1.3] mb-[15px] 
      text-sm min-[768px]:text-[15px] min-[992px]:text-base`}
    >
      {text}
    </h6>
  );
};

export default CustomSubHeader;
