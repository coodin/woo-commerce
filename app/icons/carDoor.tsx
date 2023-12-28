import * as React from "react";
const CarDoorSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    data-name="Line Color"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M14 15h2" />
    <path
      d="M19 21H5a1 1 0 0 1-1-1v-8.59a1 1 0 0 1 .29-.7l7.42-7.42a1 1 0 0 1 .7-.29H19a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM4.1 11H20"
      style={{
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default CarDoorSvg;
