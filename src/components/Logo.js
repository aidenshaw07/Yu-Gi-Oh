import React from "react";
import { Link } from "react-router-dom";
import "./logoStyle.scss";
import yugiohlogo from "./yugiohlogo.png";

const Logo = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img className="header-img" src={yugiohlogo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
