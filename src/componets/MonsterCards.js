import React from "react";
import { Link } from "react-router-dom";

const MonsterCards = () => {
  return (
    <div className="container">
      <h1>Main Deck Types</h1>
      <Link to="/effect-monster-cards">
        <div className="childContainer">Effect Monster Cards</div>
      </Link>
    </div>
  );
};

export default MonsterCards;
