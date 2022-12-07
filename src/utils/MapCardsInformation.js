import { LoadingOverlay } from "../shared/Loading";
import { useGetMappedCardsInformation } from "../shared/useGetMappedCardsInformation";

const MapCardsInformation = () => {
  const { data, isLoading } = useGetMappedCardsInformation();

  const renderCardInformations = data.map((card, i) => {
    return (
      <div className="searched-cards-container" key={i}>
      <img
        className="searched-cards-image"
        src={card.card_images[0].image_url}
        alt={card.name}
      />
      <div className="searched-cards-child-container">
        <h1 className="searched-cards-name">{card.name}</h1>
        <p className="searched-cards-desc">Card Type : {card.type}</p>
        <p className="searched-cards-desc">Card Level : {card.level}</p>
        <p className="searched-cards-desc">Card Race : {card.race}</p>
        <p className="searched-cards-desc">
          Card Attribute : {card.attribute}
        </p>
        <p className="searched-cards-desc">
          Card Description : <br /> {card.desc}
        </p>
      </div>
    </div>
    );
  });

  if (isLoading) return <LoadingOverlay show={isLoading} />;

  return <div>{renderCardInformations}</div>;
};

export default MapCardsInformation;
