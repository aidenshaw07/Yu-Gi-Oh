import { Link } from "react-router-dom";

export const filteredCardsData = (filteredDataArray) => {
  return filteredDataArray.map((card) => (
    <div className="mapped-cards-container" key={card.id}>
      <div className="mapped-cards-names">{card.name}</div>
      <Link to={`${card.id}`}>
        <img
          className="map-cards-image"
          src={card.card_images[0].image_url}
          alt={card.name}
        />
      </Link>
    </div>
  ));
};
