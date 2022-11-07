import React from "react";
import { Link } from "react-router-dom";
import "../styles/monsterCardsStyle.scss";

const MonsterCards = () => {
  return (
    <div className="monster-cards-container">
      <div className="monster-cards-header">Main Deck Types</div>
      <div className="monster-cards-child-container">
        <Link className="monster-cards-link" to="/monster-cards/effect-monster-cards">
          <div className="font-class">Effect<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/flip-effect-monster-cards">
          <div className="font-class">Flip Effect<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/gemini-monster-cards">
          <div className="font-class">Gemini<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/normal-monster-cards">
          <div className="font-class">Normal<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/normal-tuner-monster-cards">
          <div className="font-class">Normal Tuner<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-effect-monster-cards">
          <div className="font-class">Pendulum Effect<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-flip-effect-monster-cards">
          <div className="font-class">Pendulum Flip Effect<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-tuner-effect-monster-cards">
          <div className="font-class">
            Pendulum Tuner Effect<br /> Monster Cards
          </div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/ritual-effect-monster-cards">
          <div className="font-class">Ritual Effect<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/ritual-monster-cards">
          <div className="font-class">Ritual<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/spirit-monster-cards">
          <div className="font-class">Spirit<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/toon-monster-cards">
          <div className="font-class">Toon<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/tuner-monster-cards">
          <div className="font-class">Tuner<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/union-effect-monster-cards">
          <div className="font-class">Union-Effect<br /> Monster Cards</div>
        </Link>
      </div>
      <div className="monster-cards-header">Extra Deck Types</div>
      <div className="monster-cards-child-container">
        <Link className="monster-cards-link" to="/monster-cards/fusion-monster-cards">
          <div className="font-class">Fusion<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/pendulum-effect-fusion-monster-cards">
          <div className="font-class">
            Pendulum Effect Fusion<br /> Monster Cards
          </div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/link-monster-cards">
          <div className="font-class">Link<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/synchro-monster-cards">
          <div className="font-class">Synchro<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/synchro-pendulum-effect-monster-cards">
          <div className="font-class">
            Synchro Pendulum Effect<br /> Monster Cards
          </div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/synchro-tuner-monster-cards">
          <div className="font-class">Synchro Tuner<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/xyz-monster-cards">
          <div className="font-class">XYZ<br /> Monster Cards</div>
        </Link>
        <Link className="monster-cards-link" to="/monster-cards/xyz-pendulum-effect-monster-cards">
          <div className="font-class">XYZ Pendulum Effect<br /> Monster Cards</div>
        </Link>
      </div>
    </div>
  );
};

export default MonsterCards;
