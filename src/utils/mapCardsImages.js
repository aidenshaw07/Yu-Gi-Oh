import "../styles/mapCardsImages.scss";

export const mapCardsImages = (dataArray) => {
  return dataArray?.map((item) => (
    <div className="mapped-cards-container" key={item.id}>
      <div className="mapped-cards-names">{item.name}</div>
      <img className="map-cards-image" src={item.card_images[0].image_url} alt={item.name} />
    </div>
  ));
};
