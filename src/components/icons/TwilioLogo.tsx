import React from "react";
import logo from "../imgs/rq_logo_white.png";

const TwilioLogo: React.FC = () => (
  <img
    src={logo}
    alt="RQing Customer Service Logo"
    style={{
      width: "64px",
      height: "64px",
      marginRight: "10px",
    }}
  />
);

export default TwilioLogo;
