export const mapCardsData = (dataArray) => {
  return dataArray?.map((item) => (
    <div key={item.id}>
      <h1>{item.name}</h1>
      <p>{item.type}</p>
      <p>{item.race}</p>
      <img src={item.card_images[0].image_url} alt={item.name} />
      <p>{item.desc}</p>
    </div>
  ));
};
