import React, { useState, useHistory } from "react";
import { Link } from "react-router-dom";
import "../styles/headerStyle.scss";
import yugiohlogo from "../assets/yugiohlogo.png";
import SearchBar from "./SearchBar";
import Modal from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

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
       {window.location.pathname === "/" && <SearchBar />}
      </div>
    </div>
  );
};

export default Header;
