import React from "react";
import logo from "../imgs/rq_logo_white.png";

interface RQLogoProps {
  width?: string;
  height?: string;
}

const TwilioLogo: React.FC<RQLogoProps> = ({
  width = "64px",
  height = "64px",
}) => (
  <img
    src={logo}
    alt="RQing Customer Service Logo"
    style={{
      width: width,
      height: height,
      marginRight: "10px",
    }}
  />
);

export default TwilioLogo;
