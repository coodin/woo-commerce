import Link from "next/link";
import Cars from "./components/ui/cars";
import ChildHeading from "./components/ui/childHeading";
import MainHeading from "./components/ui/mainHeading";
import { useState } from "react";

const ProductTable = () => {
  const [carsTab, setCarsTab] = useState<"newCars" | "oldCars">("newCars");
  return (
    <div id="pages" className="pt-[115px] pb-[70px] bg-white">
      <div
        className="px-[15px] w-full mx-auto 
        min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]"
      >
        {/* Row */}
        <div className="flex flex-wrap -mx-[8px]">
          <div className="relative px-[8px] w-full max-w-full">
            {/* Title */}
            <div className="mb-10">
              <ChildHeading title=" Cars" />
              <MainHeading title="Car Best Deals" />
            </div>
            {/* Tab Menu */}
            <div
              className="static mb-[50px] uppercase flex flex-wrap
               min-[991px]:absolute  min-[991px]:right-[15px] min-[991px]:top-0"
            >
              <Link
                href={""}
                onClick={(e) => {
                  e.preventDefault();
                  setCarsTab("newCars");
                }}
                className={`${
                  carsTab === "newCars"
                    ? "text-white bg-[#071c1f] border-[#071c1f]"
                    : " text-[#071c1f] bg-[#F2F6F7]"
                }  font-open_sans 
                  py-[15px] px-[25px] min-[991px]:px-[40px] min-[991px]:text-base text-sm inline-block mr-[5px] mb-[10px] font-bold`}
              >
                New Cars
              </Link>
              <Link
                href={""}
                onClick={(e) => {
                  e.preventDefault();
                  setCarsTab("oldCars");
                }}
                className={`${
                  carsTab === "oldCars"
                    ? "text-white bg-[#071c1f] border-[#071c1f]"
                    : " text-[#071c1f] bg-[#F2F6F7]"
                }   font-open_sans 
                  py-[15px] px-[25px] min-[991px]:px-[40px] min-[991px]:text-base text-sm inline-block mr-[5px] mb-[10px] font-bold`}
              >
                Old Cars
              </Link>
            </div>
            {/* Tab Content */}
            <div className="w-full">
              {/* New Cars */}
              <Cars
                carsTab={carsTab}
                realTab="newCars"
                data={[
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Honda Freed",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/10.png",
                    year: 2019,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Nissan Skyline",
                    price: 39_000,
                    fromPrice: 42_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
                    year: 2019,
                    auto: true,
                    kph: 75,
                  },
                  {
                    title: "Nissan Skyline",
                    price: 39_000,
                    fromPrice: 42_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
                    year: 2019,
                    auto: true,
                    kph: 75,
                  },
                ]}
              />
              {/* Old Cars */}
              <Cars
                carsTab={carsTab}
                realTab="oldCars"
                data={[
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                  {
                    title: "Volkswagen Polo",
                    price: 40_000,
                    fromPrice: 43_000,
                    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
                    year: 2018,
                    auto: true,
                    kph: 80,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
