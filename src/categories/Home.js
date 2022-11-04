import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "../styles/homeStyle.scss";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="home-container">
        <Link className="link-content" to="/spell-cards">
          <h2>Spell <br /> Cards</h2>
        </Link>
        <Link className="link-content" to="/trap-cards">
          <h2>Trap <br /> Cards</h2>
        </Link>
        <Link className="link-content" to="/monster-cards">
          <h2>Monster <br /> Cards</h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
