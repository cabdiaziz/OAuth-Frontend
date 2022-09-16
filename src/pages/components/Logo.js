import React from "react";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="solutions"
        className="logo"
        width="250"
        height="60"
      />
    </div>
  );
};

export default Logo;
