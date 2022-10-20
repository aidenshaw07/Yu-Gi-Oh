import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Link to="/spell-cards">
        <div className="childContainer">Spell Cards</div>
      </Link>
      <Link to="/trap-cards">
        <div className="childContainer">Trap Cards</div>
      </Link>
      <Link to="/monster-cards">
        <div className="childContainer">Monster Cards</div>
      </Link>
    </div>
  );
};

export default Home;
