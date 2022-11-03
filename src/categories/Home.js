import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "../styles/homeStyle.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <div className="home-content">
        <Link className="link-content" to="/spell-cards">
          <h2 className="child-container">Spell <br /> Cards</h2>
        </Link>
        <Link className="link-content" to="/trap-cards">
          <h2 className="child-container">Trap <br /> Cards</h2>
        </Link>
        <Link className="link-content" to="/monster-cards">
          <h2 className="child-container">Monster <br /> Cards</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
