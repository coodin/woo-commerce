import * as React from "react";
const DateSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M22 2.25h-3.25V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25H2a2 2 0 0 0-2 1.999v17.75a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4.249a2 2 0 0 0-2-1.999zM22.5 22a.5.5 0 0 1-.499.5H2a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 .5-.499h3.25v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751H22a.5.5 0 0 1 .499.499z" />
    <path d="M5.25 9h3v2.25h-3zM5.25 12.75h3V15h-3zM5.25 16.5h3v2.25h-3zM10.5 16.5h3v2.25h-3zM10.5 12.75h3V15h-3zM10.5 9h3v2.25h-3zM15.75 16.5h3v2.25h-3zM15.75 12.75h3V15h-3zM15.75 9h3v2.25h-3z" />
  </svg>
);
export default DateSvg;
