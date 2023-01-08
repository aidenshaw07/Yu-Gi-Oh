import { Link } from "react-router-dom";
import "../styles/monsterCardsStyle.scss";

const MonsterCards = () => {
  return (
    <div className="monster-cards-container">
      <div className="monster-cards-header">Monster Cards Categories</div>
      <div className="monster-cards-sub-header">Main Deck Types</div>
      <div className="monster-cards-child-container">
        <Link
          className="monster-cards-link"
          to="/monster-cards/effect-monster-cards"
        >
          <h2>
            Effect Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/flip-effect-monster-cards"
        >
          <h2>
            Flip Effect Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/gemini-monster-cards"
        >
          <h2>
            Gemini Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/normal-monster-cards"
        >
          <h2>
            Normal Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/normal-tuner-monster-cards"
        >
          <h2>
            Normal Tuner Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-effect-monster-cards"
        >
          <h2>
            Pendulum Effect Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-flip-effect-monster-cards"
        >
          <h2>
            Pendulum Flip Effect Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-tuner-effect-monster-cards"
        >
          <h2>
            Pendulum Tuner Effect Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/ritual-effect-monster-cards"
        >
          <h2>
            Ritual Effect Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/ritual-monster-cards"
        >
          <h2>
            Ritual Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/spirit-monster-cards"
        >
          <h2>
            Spirit Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/toon-monster-cards"
        >
          <h2>
            Toon Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/tuner-monster-cards"
        >
          <h2>
            Tuner Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/union-effect-monster-cards"
        >
          <h2>
            Union-Effect Monster Cards
          </h2>
        </Link>
      </div>
      <div className="monster-cards-sub-header">Extra Deck Types</div>
      <div className="monster-cards-child-container">
        <Link
          className="monster-cards-link"
          to="/monster-cards/fusion-monster-cards"
        >
          <h2>
            Fusion Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/pendulum-effect-fusion-monster-cards"
        >
          <h2>
            Pendulum Effect Fusion Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/link-monster-cards"
        >
          <h2>
            Link Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/synchro-monster-cards"
        >
          <h2>
            Synchro Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/synchro-pendulum-effect-monster-cards"
        >
          <h2>
            Synchro Pendulum Effect Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/synchro-tuner-monster-cards"
        >
          <h2>
            Synchro Tuner Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/xyz-monster-cards"
        >
          <h2>
            XYZ Monster Cards
          </h2>
        </Link>
        <Link
          className="monster-cards-link"
          to="/monster-cards/xyz-pendulum-effect-monster-cards"
        >
          <h2>
            XYZ Pendulum Effect Monster Cards
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default MonsterCards;
