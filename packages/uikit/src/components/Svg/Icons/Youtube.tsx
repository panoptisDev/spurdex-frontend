import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <circle cx="14" cy="14" r="14" fill="#FFE200"/>
      <path d="M22.6419 9.45018C22.4643 8.58383 21.8131 7.96501 21.0434 7.71748C19.6818 7.34619 13.9985 7.34619 13.9985 7.34619C13.9985 7.34619 8.37445 7.34619 6.95363 7.71748C6.18402 7.96501 5.59201 8.58383 5.35521 9.45018C5 10.8735 5 13.9676 5 13.9676C5 13.9676 5 17.0617 5.35521 18.5468C5.59201 19.3513 6.18402 20.032 6.95363 20.2176C8.37445 20.5889 13.9985 20.5889 13.9985 20.5889C13.9985 20.5889 19.6226 20.5889 21.0434 20.2176C21.8131 19.9701 22.4051 19.3513 22.6419 18.5468C22.9971 17.0617 22.9971 13.9676 22.9971 13.9676C22.9971 13.9676 23.0563 10.8735 22.6419 9.45018Z" fill="#0E0E0E"/>
      <path d="M12.1633 16.8141V11.1829L16.8994 13.9676L12.1633 16.8141Z" fill="#FFE200"/>
    </Svg>
  );
};

export default Icon;



