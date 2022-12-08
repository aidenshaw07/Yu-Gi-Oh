import { Link } from "react-router-dom";
import "../styles/spellCardsStyle.scss";

const SpellCards = () => {
  return (
    <div className="spell-cards-container">
      <div className="spell-cards-header">Spell Cards Categories</div>
      <div className="spell-cards-child-container">
        <Link className="spell-cards-link" to="/spell-cards/normal-spell-cards">
          <h2>
            Normal Spell Cards
          </h2>
        </Link>
        <Link className="spell-cards-link" to="/spell-cards/field-spell-cards">
          <h2>
            Field Spell Cards
          </h2>
        </Link>
        <Link className="spell-cards-link" to="/spell-cards/equip-spell-cards">
          <h2>
            Equip Spell Cards
          </h2>
        </Link>
        <Link
          className="spell-cards-link"
          to="/spell-cards/continuous-spell-cards"
        >
          <h2>
            Continuous Spell Cards
          </h2>
        </Link>
        <Link
          className="spell-cards-link"
          to="/spell-cards/quick-play-spell-cards"
        >
          <h2>
            Quick Play Spell Cards
          </h2>
        </Link>
        <Link className="spell-cards-link" to="/spell-cards/ritual-spell-cards">
          <h2>
            Ritual Spell Cards
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SpellCards;
