import { Link } from "react-router-dom";
import "../styles/monsterCardsStyle.scss";

const MonsterCards = () => {
  return (
    <div className="monster-cards-container">
      <div className="monster-cards-header">Main Deck Types</div>
      <div className="monster-cards-child-container">
        <Link
          className="monster-cards-link"
          to="/monster-cards/effect-monster-cards"
        >
          <h2>
            Effect
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/flip-effect-monster-cards"
        >
          <h2>
            Flip Effect
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/gemini-monster-cards"
        >
          <h2>
            Gemini
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/normal-monster-cards"
        >
          <h2>
            Normal
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/normal-tuner-monster-cards"
        >
          <h2>
            Normal Tuner
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-effect-monster-cards"
        >
          <h2>
            Pendulum Effect
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-flip-effect-monster-cards"
        >
          <h2>
            Pendulum Flip Effect
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-tuner-effect-monster-cards"
        >
          <h2>
            Pendulum Tuner Effect
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/ritual-effect-monster-cards"
        >
          <h2>
            Ritual Effect
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/ritual-monster-cards"
        >
          <h2>
            Ritual
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/spirit-monster-cards"
        >
          <h2>
            Spirit
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/toon-monster-cards"
        >
          <h2>
            Toon
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/tuner-monster-cards"
        >
          <h2>
            Tuner
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/union-effect-monster-cards"
        >
          <h2>
            Union-Effect
            <br /> Monster Cards
          </h2>
        </Link>
      </div>
      <div className="monster-cards-header">Extra Deck Types</div>
      <div className="monster-cards-child-container">
        <Link
          className="monster-cards-link"
          to="/monster-cards/fusion-monster-cards"
        >
          <h2>
            Fusion
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-effect-fusion-monster-cards"
        >
          <h2>
            Pendulum Effect Fusion
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/link-monster-cards"
        >
          <h2>
            Link
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/synchro-monster-cards"
        >
          <h2>
            Synchro
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/synchro-pendulum-effect-monster-cards"
        >
          <h2>
            Synchro Pendulum Effect
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/synchro-tuner-monster-cards"
        >
          <h2>
            Synchro Tuner
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/xyz-monster-cards"
        >
          <h2>
            XYZ
            <br /> Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/xyz-pendulum-effect-monster-cards"
        >
          <h2>
            XYZ Pendulum Effect
            <br /> Monster Cards
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default MonsterCards;
