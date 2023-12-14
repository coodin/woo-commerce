import * as React from "react";
const CarburetorSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="M49 43V31h-2V11c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2h-7V4c0-1.654-1.346-3-3-3H27c-1.654 0-3 1.346-3 3v1h-7c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v20h-2v12h-2v9.414L19.586 59H21v4h22v-4h1.414L51 52.414V43h-2zM26 4c0-.552.449-1 1-1h10c.551 0 1 .448 1 1v1H26V4zm-9.001 3H47v2H17l-.001-2zM19 11h2v18h2V11h6v18h2V11h6v18h2V11h6v20h-2V13h-2v18h-6V13h-2v18h-6V13h-2v18h-6V11zm-2 26h27.8v-2H17v-2h30v6H19.2v2H47v2H17v-6zm32 8v2H17v2h32v2H15v-6h34zm-8 16H23v-2h18v2zm2.586-4H20.414l-4-4h31.172l-4 4z" />
  </svg>
);
export default CarburetorSvg;
