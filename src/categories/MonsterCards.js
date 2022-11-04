import React from "react";
import { Link } from "react-router-dom";
import "../styles/monsterCardsStyle.scss";

const MonsterCards = () => {
  return (
    <div className="monster-cards-container">
      <div className="monster-cards-header">Main Deck Types</div>
      <div className="monster-cards-child-container">
        <Link className="monster-cards-link" to="/monster-cards/effect-monster-cards">
          <h2 className="childContainer">Effect<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/flip-effect-monster-cards">
          <h2 className="childContainer">Flip Effect<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/gemini-monster-cards">
          <h2 className="childContainer">Gemini<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/normal-monster-cards">
          <h2 className="childContainer">Normal<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/normal-tuner-monster-cards">
          <h2 className="childContainer">Normal Tuner<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-effect-monster-cards">
          <h2 className="childContainer">Pendulum Effect<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-flip-effect-monster-cards">
          <h2 className="childContainer">Pendulum Flip Effect<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-tuner-effect-monster-cards">
          <h2 className="childContainer">
            Pendulum Tuner Effect<br /> Monster Cards
          </h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/ritual-effect-monster-cards">
          <h2 className="childContainer">Ritual Effect<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/ritual-monster-cards">
          <h2 className="childContainer">Ritual<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/spirit-monster-cards">
          <h2 className="childContainer">Spirit<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/toon-monster-cards">
          <h2 className="childContainer">Toon<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/tuner-monster-cards">
          <h2 className="childContainer">Tuner<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/union-effect-monster-cards">
          <h2 className="childContainer">Union-Effect<br /> Monster Cards</h2>
        </Link>
      </div>
      <div className="monster-cards-header">Extra Deck Types</div>
      <div className="monster-cards-child-container">
        <Link className="monster-cards-link" to="/monster-cards/fusion-monster-cards">
          <h2 className="childContainer">Fusion<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-effect-fusion-monster-cards">
          <h2 className="childContainer">
            Pendulum Effect Fusion<br /> Monster Cards
          </h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/link-monster-cards">
          <h2 className="childContainer">Link<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/synchro-monster-cards">
          <h2 className="childContainer">Synchro<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/synchro-pendulum-effect-monster-cards">
          <h2 className="childContainer">
            Synchro Pendulum Effect<br /> Monster Cards
          </h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/synchro-tuner-monster-cards">
          <h2 className="childContainer">Synchro Tuner<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/xyz-monster-cards">
          <h2 className="childContainer">XYZ<br /> Monster Cards</h2>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/xyz-pendulum-effect-monster-cards">
          <h2 className="childContainer">XYZ Pendulum Effect<br /> Monster Cards</h2>
        </Link>
      </div>
    </div>
  );
};

export default MonsterCards;
