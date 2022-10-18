import React from "react";
import { Link } from "react-router-dom";

const MonsterCards = () => {
  return (
    <div className="container">
      <Link to="/effect-monster-cards">
        <div className="childContainer">Effect Monster Cards</div>
      </Link>
    </div>
  );
};

export default MonsterCards;
