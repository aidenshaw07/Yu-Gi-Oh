import React from "react";
import { Link } from "react-router-dom";

const TrapCards = () => {
  
  return (
    <div className="container">
      <Link to="/trap-cards/normal-trap-cards">
        <div className="childContainer">Normal Trap Cards</div>
      </Link>
      <Link to="/trap-cards/continuous-trap-cards">
        <div className="childContainer">Continuous Trap Cards</div>
      </Link>
      <Link to="/trap-cards/counter-trap-cards">
        <div className="childContainer">Counter Trap Cards</div>
      </Link>
    </div>
  );
};

export default TrapCards;
