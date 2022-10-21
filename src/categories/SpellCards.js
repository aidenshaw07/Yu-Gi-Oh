import React from "react";
import { Link } from "react-router-dom";

const SpellCards = () => {
  return (
    <div className="container">
      <Link to="/normal-spell-cards">
        <div className="childContainer">Normal Spell Cards</div>
      </Link>
      <Link to="/field-spell-cards">
        <div className="childContainer">Field Spell Cards</div>
      </Link>
      <Link to="/equip-spell-cards">
        <div className="childContainer">Equip Spell Cards</div>
      </Link>
      <Link to="/continuous-spell-cards">
        <div className="childContainer">Continuous Spell Cards</div>
      </Link>
      <Link to="/quick-play-spell-cards">
        <div className="childContainer">Quick Play Spell Cards</div>
      </Link>
      <Link to="/ritual-spell-cards">
        <div className="childContainer">Ritual Spell Cards</div>
      </Link>
    </div>
  );
};

export default SpellCards;
