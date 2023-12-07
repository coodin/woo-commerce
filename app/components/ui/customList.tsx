import Link from "next/link";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";

interface CustomListProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title?: string;
  list: {
    title: string;
    url: string;
    imgUrl?: string;
    innerList?: { title: string; url: string }[];
  }[];
  showTitle?: boolean;
}

// type CustomList = {
//   title?: string;
//   list: { title: string; url: string; imgUrl: string }[];
//   showTitle?: boolean;
// };

const CustomList: React.FC<CustomListProps> = ({
  title = "",
  list,
  showTitle = false,
  className,
}) => {
  return (
    <li
      className={`${className} w-[50%] py-3 pr-5 pl-[25px] leading-[1.3] text-base`}
    >
      {showTitle ? (
        <Link
          href={"/"}
          className="block py-3 px-5 border-b border-dashed border-[#ddd] text-[#212529] font-open_sans text-base hover:text-[#e53e29]
                      transition-all ease-in-out duration-300 font-semibold bg-[#F2F6F7]"
        >
          {title}
        </Link>
      ) : null}

      <ul
        className="relative top-0 w-full border-none drop-shadow-none m-0 
                  transition-[opacity,visibility] ease-in-out duration-200 delay-100 opacity-0 group-hover/parent:opacity-100 invisible group-hover/parent:visible  z-[inherit]"
      >
        {list.map((item) => {
          return (
            <li
              key={item.url}
              className="relative py-3 px-5 text-[#212529] group/item"
            >
              <Link
                href={""}
                className="group-hover/item:text-[#e53e29] flex transition-all duration-300 ease-in-out font-open_sans"
              >
                {" "}
                {item.title}
                {item.title.startsWith("OtherPages") ? (
                  <span className="flex-1 text-right">{">>"}</span>
                ) : null}
              </Link>
              {item.innerList != undefined && item.innerList.length != 0 && (
                <ul
                  className="absolute left-full top-[130%] group-hover/item:top-0 min-w-[230px] py-[15px] px-0 m-0
                   shadow-[0,5px,20px,0,rgba(23,44,82,0.1)] bg-white
                    opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible
                   border-t-[5px] border-solid border-[#e53e29] text-left
                   transition-[opacity,visibility,top] ease-in-out duration-200 delay-100 z-[999]"
                >
                  {item.innerList.map((innerItem) => {
                    return (
                      <li
                        key={innerItem.url}
                        className="relative py-3 px-5 text-[#212529] group/innerItem"
                      >
                        <Link
                          href={""}
                          className="group-hover/innerItem:text-[#e53e29] transition-all duration-300 ease-in-out font-open_sans"
                        >
                          {" "}
                          {innerItem.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
              {item.imgUrl && (
                <img
                  src={item.imgUrl}
                  className="absolute -bottom-5 group-hover/item:-bottom-[10px] left-[50%] w-[150px] h-auto 
                opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible
                 shadow-[0_1px_6px_0_rgba(32,33,36,.28);] z-[999] transition-all duration-300"
                />
              )}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default CustomList;
