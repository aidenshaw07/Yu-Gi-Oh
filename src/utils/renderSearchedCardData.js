import React from "react";

export const renderSearchedCardData = (searchedDataArray) => {

  return searchedDataArray.map((card, i) => {
    if (
      searchedDataArray[0]?.id === 97803170 ||
      searchedDataArray[1]?.id === 98804359
    ) {
      return <div key={i}></div>;
    } else {
      return (
        <div key={i}>
          <h1>{card.name}</h1>
          <img src={card.card_images[0].image_url} alt={card.name} />
        </div>
      );
    }
  });
};
