import * as React from "react";
const InstagramSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 -0.5 25 25"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 5h-6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z"
      clipRule="evenodd"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      clipRule="evenodd"
    />
    <rect
      width={2}
      height={2}
      x={15.5}
      y={9}
      fill="#000"
      rx={1}
      transform="rotate(-90 15.5 9)"
    />
    <rect
      width={1}
      height={1}
      x={16}
      y={8.5}
      stroke="#000"
      strokeLinecap="round"
      rx={0.5}
      transform="rotate(-90 16 8.5)"
    />
  </svg>
);
export default InstagramSvg;
