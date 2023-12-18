import CallSvg from "../icons/call";
import MessageSvg from "../icons/message";
import NavigationSvg from "../icons/navigation";

const CustomArea = () => {
  return (
    <div
      className="relative bg-[#071c1f]  py-[50px]  mt-10
    before:content-[''] before:absolute before:left-0 before:top-0 before:h-[50%] before:w-full before:bg-white
    min-[768px]:before:h-[50%] min-[992px]:before:h-[50%]"
    >
      {/* Container */}
      <div
        className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
      >
        {/* Row */}
        <div className="flex mx-[-15px]">
          <div className="relative flex flex-wrap justify-center flex-shrink-0 w-full max-w-full px-[15px]">
            {[
              {
                logo: <CallSvg className="w-8 h-8 fill-[#e53e29]" />,
                title: "+123-456-789",
                secondTitle: "Make A Call",
              },
              {
                logo: <MessageSvg className="w-10 h-10 fill-[#e53e29]" />,
                title: "info@Webmail.com",
                secondTitle: "Support Mail",
              },
              {
                logo: (
                  <NavigationSvg className="w-10 h-10 fill-[rgba(229,62,41,0.3)] " />
                ),
                title: "12A, New Your, USA",
                secondTitle: "Office Address",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center shadow-search mb-[10px] min-[992px]:mb-0 items-center  bg-white  py-3 px-2 
                  w-full min-[768px]:w-[calc(50%_-_20px)] min-[768px]:ml-5  min-[992px]:w-[calc(33.33%_-_40px)]"
                >
                  {/* Logo */}
                  <div className="">{item.logo}</div>
                  <div className="ml-2">
                    <h2 className="text-sm grayscale-[1] text-black/60 font-semibold">
                      {item.title}
                    </h2>
                    <h1 className="text-2xl text-black font-bold">
                      {item.secondTitle}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomArea;
