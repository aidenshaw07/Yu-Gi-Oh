import React from "react";
import { Link } from "react-router-dom";

const SpellCards = () => {
  return (
    <div className="container">
      <Link to="/spell-cards/normal-spell-cards">
        <div className="childContainer">Normal Spell Cards</div>
      </Link>
      <Link to="/spell-cards/field-spell-cards">
        <div className="childContainer">Field Spell Cards</div>
      </Link>
      <Link to="/spell-cards/equip-spell-cards">
        <div className="childContainer">Equip Spell Cards</div>
      </Link>
      <Link to="/spell-cards/continuous-spell-cards">
        <div className="childContainer">Continuous Spell Cards</div>
      </Link>
      <Link to="/spell-cards/quick-play-spell-cards">
        <div className="childContainer">Quick Play Spell Cards</div>
      </Link>
      <Link to="/spell-cards/ritual-spell-cards">
        <div className="childContainer">Ritual Spell Cards</div>
      </Link>
    </div>
  );
};

export default SpellCards;
