import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/headerStyle.scss";
import yugiohlogo from "../assets/yugiohlogo.png";
import SearchBar from "./SearchBar";
import { useStore } from "../zustand/Store";

const Header = () => {
  const location = useLocation();
  const setFieldState = useStore((cardInfo) => cardInfo.setFieldState);
  return (
    <div className="header-container">
      <Link to="/">
        <img
          onClick={() => setFieldState("searchedCardName", "")}
          className="header-img"
          src={yugiohlogo}
          alt="logo"
        />
      </Link>
      <div className="header-child-container">
        <Link className="link-content" to="/">
          <h3
            onClick={() => setFieldState("searchedCardName", "")}
            className="header-text-area"
          >
            Home
          </h3>
        </Link>
        <Link className="link-content" to="/how-to-play">
          <h3
            onClick={() => setFieldState("searchedCardName", "")}
            className="header-text-area"
          >
            How To <br /> Play!
          </h3>
        </Link>
        {location.pathname === "/" && <SearchBar />}
      </div>
    </div>
  );
};

export default Header;
