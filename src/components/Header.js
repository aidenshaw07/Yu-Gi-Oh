import React from "react";
import { Link } from "react-router-dom";
import "../styles/headerStyle.scss";
import yugiohlogo from "../assets/yugiohlogo.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img className="header-img" src={yugiohlogo} alt="logo" />
      </Link>
      <div className="header-child-container">
        <Link className="link-content" to="/">
          <h3 className="header-text-area">Home</h3>
        </Link>
        <SearchBar />
        <Link className="link-content" to="/">
          <h3 className="header-text-area">How To Play!</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;