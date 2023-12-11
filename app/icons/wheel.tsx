import * as React from "react";
const WheelSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g strokeWidth={1.5}>
      <circle cx={12} cy={12} r={2} />
      <path
        strokeLinecap="round"
        d="M6 12h4M14 12h4M9 17.196l2-3.464M13 10.268l2-3.464M15 17.196l-2-3.464M11 10.268 9 6.804M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
      <path strokeLinecap="round" d="M15 17.197A6 6 0 1 1 17.197 15" />
    </g>
  </svg>
);
export default WheelSvg;
