import Link from "next/link";
import HoverElement from "./hoverElement";
import CustomList from "./ui/customList";
import { RefObject } from "react";

type IntermediateProps = {
  appointmentRef: RefObject<HTMLDialogElement>;
};

const Intermediate: React.FC<IntermediateProps> = ({ appointmentRef }) => {
  return (
    <div className="min-[1200px]:block hidden px-[15px]">
      <nav className="">
        <div className="">
          <ul className="flex">
            <HoverElement
              onClickForButton={() => {
                const element = document.getElementById("home");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              text="Home+"
              className="group/parent"
            >
              {/* <ul
                className="absolute top-[130%] w-[510px] min-w-[230px] py-[15px] px-0 flex justify-center
               bg-white m-0 shadow-[0_5px_20px_0_rgba(23,44,82,0.1)] 
               opacity-0 group-hover/parent:opacity-100 group-hover/parent:top-full  invisible group-hover/parent:visible text-left 
                border-t-[5px] border-solid border-[#e53e29] 
                transition-[opacity,visibility,top] ease-in-out duration-200 delay-100 z-[999]"
              >
                <CustomList
                  title="Home Pages"
                  list={[
                    {
                      title: "Home Style-01",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "1",
                    },
                    {
                      title: "Home Style-02",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "2",
                    },
                    {
                      title: "Home Style-03",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "3",
                    },
                    {
                      title: "Home Style-04",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "4",
                    },
                    {
                      title: "Home Style-05",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "5",
                    },
                    {
                      title: "Home Style-06",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "6",
                    },
                    {
                      title: "Home Style-07",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "7",
                    },
                    {
                      title: "Home Style-08",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "8",
                    },
                  ]}
                  showTitle={true}
                />
                <CustomList
                  title="Home Pages"
                  list={[
                    {
                      title: "Home Style-09",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "9",
                    },
                    {
                      title: "Home Style-10",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "10",
                    },
                    {
                      title: "Home Style-11",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "11",
                    },
                    {
                      title: "Home Style-12",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "12",
                    },
                    {
                      title: "Home Style-13",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "13",
                    },
                    {
                      title: "Home Style-14",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "14",
                    },
                    {
                      title: "Home Style-15",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "15",
                    },
                    {
                      title: "Home Style-16",
                      imgUrl:
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/home-demos/home-1.jpg",
                      url: "16",
                    },
                  ]}
                  showTitle={true}
                />
              </ul> */}
            </HoverElement>
            <HoverElement
              onClickForButton={() => {
                const element = document.getElementById("about");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              text="About+"
              className="group/parent"
            >
              {/* <ul
                className="absolute top-[130%] min-w-[230px] w-full py-[15px] px-0 flex justify-start
               bg-white m-0 shadow-[0_5px_20px_0_rgba(23,44,82,0.1)] 
               opacity-0 group-hover/parent:opacity-100 group-hover/parent:top-full  invisible group-hover/parent:visible text-left 
                border-t-[5px] border-solid border-[#e53e29] 
                transition-[opacity,visibility,top] ease-in-out duration-200 delay-100 z-[999]"
              >
                <CustomList
                  className="w-full !p-0"
                  list={[
                    { title: "About", url: "1", imgUrl: "" },
                    { title: "Services", url: "2", imgUrl: "" },
                    { title: "Service Details", url: "3", imgUrl: "" },
                    { title: "Portfolio", url: "4", imgUrl: "" },
                    { title: "Portfolio-02", url: "5", imgUrl: "" },
                    { title: "Portfolio Details", url: "6", imgUrl: "" },
                    { title: "Team", url: "7", imgUrl: "" },
                    { title: "Team Details", url: "8", imgUrl: "" },
                    { title: "FAQ", url: "9", imgUrl: "" },
                    { title: "Google Maps Locations", url: "10", imgUrl: "" },
                  ]}
                />
              </ul> */}
            </HoverElement>
            <HoverElement
              onClickForButton={() => {
                const element = document.getElementById("shop");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              text="Shop+"
              className="group/parent"
            >
              {/* <ul
                className="absolute top-[130%] min-w-[230px] w-full py-[15px] px-0 flex justify-start
               bg-white m-0 shadow-[0_5px_20px_0_rgba(23,44,82,0.1)] 
               opacity-0 group-hover/parent:opacity-100 group-hover/parent:top-full  invisible group-hover/parent:visible text-left 
                border-t-[5px] border-solid border-[#e53e29] 
                transition-[opacity,visibility,top] ease-in-out duration-200 delay-100 z-[999]"
              >
                <CustomList
                  className="w-full !p-0"
                  list={[
                    { title: "Shop", url: "1", imgUrl: "" },
                    { title: "Shop Grid", url: "2", imgUrl: "" },
                    { title: "Shop Left SideBar", url: "3", imgUrl: "" },
                    { title: "Shop Right SideBar", url: "4", imgUrl: "" },
                    { title: "Shop Details", url: "5", imgUrl: "" },
                    { title: "Shop Details 02", url: "6", imgUrl: "" },
                    {
                      title: "OtherPages",
                      url: "7",
                      imgUrl: "",
                      innerList: [
                        { title: "Cart", url: "1" },
                        { title: "Wishlist", url: "2" },
                        { title: "Checkout", url: "3" },
                        { title: "Order Tracking", url: "4" },
                        { title: "My Account", url: "5" },
                        { title: "Sign in", url: "6" },
                        { title: "Register", url: "7" },
                      ],
                    },
                    { title: "Shop Card Grid", url: "8", imgUrl: "" },
                    { title: "Shop Card Left Sidebar", url: "9", imgUrl: "" },
                    { title: "Shop Card Right Sidebar", url: "10", imgUrl: "" },
                    { title: "Shop Car Details", url: "11", imgUrl: "" },
                  ]}
                />
              </ul> */}
            </HoverElement>
            <HoverElement
              onClickForButton={() => {
                const element = document.getElementById("news");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              text="News+"
              className="group/parent"
            >
              {/* <ul
                className="absolute top-[130%] min-w-[230px] w-full py-[15px] px-0 flex justify-start
               bg-white m-0 shadow-[0_5px_20px_0_rgba(23,44,82,0.1)] 
               opacity-0 group-hover/parent:opacity-100 group-hover/parent:top-full  invisible group-hover/parent:visible text-left 
                border-t-[5px] border-solid border-[#e53e29] 
                transition-[opacity,visibility,top] ease-in-out duration-200 delay-100 z-[999]"
              >
                <CustomList
                  className="w-full !p-0"
                  list={[
                    { title: "News", url: "1", imgUrl: "" },
                    { title: "News Grid", url: "2", imgUrl: "" },
                    { title: "News Left sidebar", url: "3", imgUrl: "" },
                    { title: "News Right sidebar", url: "4", imgUrl: "" },
                    { title: "News Details", url: "5", imgUrl: "" },
                  ]}
                />
              </ul> */}
            </HoverElement>
            <HoverElement
              onClickForButton={() => {
                const element = document.getElementById("pages");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              text="Pages+"
              className="group/parent !static"
            >
              {/* <ul
                className="absolute top-[130%] left-0 right-auto min-w-[230px] w-full py-[15px] px-0 flex justify-start
               bg-white m-0 shadow-[0_5px_20px_0_rgba(23,44,82,0.1)] 
               opacity-0 group-hover/parent:opacity-100 group-hover/parent:top-full  invisible group-hover/parent:visible 
                border-t-[5px] border-solid border-[#e53e29] text-left 
                transition-[opacity,visibility,top] ease-in-out duration-200 delay-100 z-[999]"
              >
                <CustomList
                  className="w-[25%] pt-3 pl-[30px] pr-[25px] min-w-[250px]"
                  title="Inner Pages"
                  showTitle={true}
                  list={[
                    { title: "Portfolio", url: "1" },
                    { title: "Portfolio - 02", url: "2" },
                    { title: "Portfolio Details", url: "3" },
                    { title: "Team", url: "4" },
                    { title: "Team Details", url: "5" },
                    { title: "FAQ", url: "6" },
                  ]}
                />
                <CustomList
                  className="w-[25%] pt-3 pl-[30px] pr-[25px] min-w-[250px]"
                  title="Inner Pages"
                  showTitle={true}
                  list={[
                    { title: "History", url: "1" },
                    { title: "Appointment - 02", url: "2" },
                    { title: "Google Map Locations", url: "3" },
                    { title: "404", url: "4" },
                    { title: "Contact", url: "5" },
                    { title: "Coming Soon", url: "6" },
                  ]}
                />
                <CustomList
                  className="w-[25%] pt-3 pl-[30px] pr-[25px] min-w-[250px]"
                  title="Shop Pages"
                  showTitle={true}
                  list={[
                    { title: "Shop", url: "1" },
                    { title: "Shop Left sidebar", url: "2" },
                    { title: "Shop Right sidebar", url: "3" },
                    { title: "Shop Grid", url: "4" },
                    { title: "Shop Details", url: "5" },
                    { title: "Cart", url: "6" },
                  ]}
                />
                <li
                  className={` w-[25%] pt-3  pl-[30px] pr-[25px] leading-[1.3] text-base   min-w-[250px]`}
                >
                  <Link
                    href={""}
                    className="block border-b-[1px] bg-[#F2F6F7] border-dashed border-[#ddd]  font-semibold p-[10px]"
                  >
                    <img
                      src={
                        "https://tunatheme.com/tf/html/autixir-preview/autixir/img/banner/menu-banner-1.jpg"
                      }
                      className="max-w-full align-middle"
                    />
                  </Link>
                </li>
              </ul> */}
            </HoverElement>
            <HoverElement
              onClickForButton={() => {
                const element = document.getElementById("contact");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              text="Contact"
            />
            <li className="relative inline-block ml-[15px]">
              <button
                onClick={() => {
                  appointmentRef.current?.showModal();
                }}
                className="py-[15px] px-[20px] font-bold 
                text-sm whitespace-nowrap inline-block bg-[#e53e29] leading-[1.8] text-[#fff]  hover:bg-[#F2F6F7] transition-all duration-300 ease-linear hover:text-[#071c1f]"
              >
                GET APPOINTMENT
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Intermediate;
