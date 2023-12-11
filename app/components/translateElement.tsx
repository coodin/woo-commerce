import { DetailedHTMLProps, LiHTMLAttributes } from "react";

interface CustomListProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  relativePos: {
    x: number | null;
    y: number | null;
  };
  imgUrl?: string;
  children?: React.ReactNode;
  index?: number;
}
const TranslateElement: React.FC<CustomListProps> = ({
  className,
  relativePos,
  imgUrl,
  children,
  index,
}) => {
  // const randomNumberX = generateRandomNumber();
  // const randomNumberY = generateRandomNumber();

  // const randomValueForX = Math.floor(Math.random() * 10);
  // const randomValueForY = Math.floor(Math.random() * 10);
  // console.log(`Index: ${index} randomValueForX${randomNumberX}`);
  // console.log(`Index: ${index} randomValueForY${randomNumberY}`);
  const dynamicStyles = {
    transform: `translate3d(${relativePos.x}px,${relativePos.y}px,0px)`,
    transformStyle: "preserve-3d" as const,
    backfaceVisibility: "hidden" as const,
  };

  const styleForDiv = {
    transform: `translate3d(0px,0px,0px)`,
  };

  return (
    <li
      style={dynamicStyles}
      className={`block absolute top-0 left-0 w-full h-full`}
    >
      {children ? (
        children
      ) : (
        <div style={styleForDiv} className={`${className} absolute translate-`}>
          <img className="max-w-full align-middle" src={imgUrl} />
        </div>
      )}
    </li>
  );
};

export default TranslateElement;
