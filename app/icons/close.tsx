import * as React from "react";
const CloseSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{"Close"}</title>
    <g fill="none" fillRule="evenodd" strokeWidth={1.44}>
      <path strokeLinecap="round" d="M17 7 7 17M7 7l10 10" />
    </g>
  </svg>
);
export default CloseSvg;
