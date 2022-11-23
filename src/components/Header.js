import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/headerStyle.scss";
import yugiohlogo from "../assets/yugiohlogo.png";
import SearchBar from "./SearchBar";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-container">
      <Link to="/">
        <img className="header-img" src={yugiohlogo} alt="logo" />
      </Link>
      <div className="header-child-container">
        <Link className="link-content" to="/">
          <h3 className="header-text-area">Home</h3>
        </Link>
        <Link className="link-content" to="/how-to-play">
          <h3 className="header-text-area">How To Play!</h3>
        </Link>
       {location.pathname === "/" && <SearchBar />}
      </div>
    </div>
  );
};

export default Header;
