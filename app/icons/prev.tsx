import * as React from "react";
const PrevSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    transform="rotate(180)"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M25.468 14.508 4.501 14.5a1.501 1.501 0 0 0-.002 3l21.125.009a2.53 2.53 0 0 1-.377.439l-9.68 8.951a1.5 1.5 0 1 0 2.037 2.202l9.68-8.95a5.503 5.503 0 0 0 .078-8.003l-9.591-9.221a1.5 1.5 0 0 0-2.079 2.162l9.591 9.221c.065.063.127.129.185.198Z" />
  </svg>
);
export default PrevSvg;
