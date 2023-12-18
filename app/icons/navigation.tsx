import * as React from "react";
const NavigationSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      //   fill="#4D6BFF"
      d="M63.3 512.2a448.5 448 0 1 0 897 0 448.5 448 0 1 0-897 0Z"
    />
    <path
      fill="#e53e29"
      d="M416.094 605.094a5.484 5.484 0 0 1 2.719 2.718L501.125 783.5c3.188 6.844 12.844 7.031 15.75.375l201.844-465.75c3.562-8.156-4.782-16.5-12.938-12.938L240.125 507.031c-6.75 2.906-6.563 12.563.375 15.75l175.594 82.313z"
    />
  </svg>
);
export default NavigationSvg;
