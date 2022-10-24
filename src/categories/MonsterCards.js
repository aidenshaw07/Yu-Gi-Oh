import React from "react";
import { Link } from "react-router-dom";

const MonsterCards = () => {
  return (
    <div className="container">
      <h1>Main Deck Types</h1>
      <Link to="/monster-cards/effect-monster-cards">
        <div className="childContainer">Effect Monster Cards</div>
      </Link>
      <Link to="/monster-cards/flip-effect-monster-cards">
        <div className="childContainer">Flip Effect Monster Cards</div>
      </Link>
      <Link to="/monster-cards/gemini-monster-cards">
        <div className="childContainer">Gemini Monster Cards</div>
      </Link>
      <Link to="/monster-cards/normal-monster-cards">
        <div className="childContainer">Normal Monster Cards</div>
      </Link>
      <Link to="/monster-cards/normal-tuner-monster-cards">
        <div className="childContainer">Normal Tuner Monster Cards</div>
      </Link>
      <Link to="/monster-cards/pendulum-effect-monster-cards">
        <div className="childContainer">Pendulum Effect Monster Cards</div>
      </Link>
      <Link to="/monster-cards/pendulum-flip-effect-monster-cards">
        <div className="childContainer">Pendulum Flip Effect Monster Cards</div>
      </Link>
      <Link to="/monster-cards/pendulum-tuner-effect-monster-cards">
        <div className="childContainer">
          Pendulum Tuner Effect Monster Cards
        </div>
      </Link>
      <Link to="/monster-cards/ritual-effect-monster-cards">
        <div className="childContainer">Ritual Effect Monster Cards</div>
      </Link>
      <Link to="/monster-cards/ritual-monster-cards">
        <div className="childContainer">Ritual Monster Cards</div>
      </Link>
      <Link to="/monster-cards/spirit-monster-cards">
        <div className="childContainer">Spirit Monster Cards</div>
      </Link>
      <Link to="/monster-cards/toon-monster-cards">
        <div className="childContainer">Toon Monster Cards</div>
      </Link>
      <Link to="/monster-cards/tuner-monster-cards">
        <div className="childContainer">Tuner Monster Cards</div>
      </Link>
      <Link to="/monster-cards/union-effect-monster-cards">
        <div className="childContainer">Union-Effect Monster Cards</div>
      </Link>
      <h1>Extra Deck Types</h1>
      <Link to="/monster-cards/fusion-monster-cards">
        <div className="childContainer">Fusion Monster Cards</div>
      </Link>
      <Link to="/monster-cards/pendulum-effect-fusion-monster-cards">
        <div className="childContainer">
          Pendulum Effect Fusion Monster Cards
        </div>
      </Link>
      <Link to="/monster-cards/link-monster-cards">
        <div className="childContainer">Link Monster Cards</div>
      </Link>
      <Link to="/monster-cards/synchro-monster-cards">
        <div className="childContainer">Synchro Monster Cards</div>
      </Link>
      <Link to="/monster-cards/synchro-pendulum-effect-monster-cards">
        <div className="childContainer">Synchro Pendulum Effect Monster Cards</div>
      </Link>
      <Link to="/monster-cards/synchro-tuner-monster-cards">
        <div className="childContainer">Synchro Tuner Monster Cards</div>
      </Link>
      <Link to="/monster-cards/xyz-monster-cards">
        <div className="childContainer">XYZ Monster Cards</div>
      </Link>
      <Link to="/monster-cards/xyz-pendulum-effect-monster-cards">
        <div className="childContainer">XYZ Pendulum Effect Monster Cards</div>
      </Link>
    </div>
  );
};

export default MonsterCards;
