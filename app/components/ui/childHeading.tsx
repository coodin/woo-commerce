const ChildHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h6 className="text-[#e53e29] text-[14px] min-[768px]:text-[15px] min-[992px]:text-[16px] uppercase mb-[15px] font-bold ">
      {title}
    </h6>
  );
};

export default ChildHeading;
