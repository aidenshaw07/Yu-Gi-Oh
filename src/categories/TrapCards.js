import { Link } from "react-router-dom";
import "../styles/trapCardsStyle.scss";

const TrapCards = () => {
  return (
    <div className="trap-cards-container">
      <div className="trap-cards-header">Trap Cards Categories</div>
      <div className="trap-cards-child-container">
        <Link className="trap-cards-link" to="/trap-cards/normal-trap-cards">
          <h2 className="childContainer">
            Normal
            <br /> Trap Cards
          </h2>
        </Link>
        <Link
          className="trap-cards-link"
          to="/trap-cards/continuous-trap-cards"
        >
          <h2 className="childContainer">
            Continuous
            <br /> Trap Cards
          </h2>
        </Link>
        <Link className="trap-cards-link" to="/trap-cards/counter-trap-cards">
          <h2 className="childContainer">
            Counter
            <br /> Trap Cards
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default TrapCards;
