import React from "react";
import { Link } from "react-router-dom";

const TrapCards = () => {
  
  return (
    <div className="container">
      <Link to="/normal-trap-cards">
        <div className="childContainer">Normal Trap Cards</div>
      </Link>
      <Link to="/continuous-trap-cards">
        <div className="childContainer">Continuous Trap Cards</div>
      </Link>
      <Link to="/counter-trap-cards">
        <div className="childContainer">Counter Trap Cards</div>
      </Link>
    </div>
  );
};

export default TrapCards;
