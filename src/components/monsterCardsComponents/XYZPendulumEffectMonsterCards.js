import React, { useState } from "react";
import { useGetXYZPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetXYZPendulumEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

const XYZPendulumEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: xyzPendulumEffectMonsterCardData,
    isLoading,
    error,
  } = useGetXYZPendulumEffectMonsterCardsData();

  const renderXYZPendulumEffectMonsterCardData = mapCardsImages(
    xyzPendulumEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderXYZPendulumEffectMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="rendered-mapped-cards">{paginatedCurrentCards}</div>
      <PaginateRenderedCards
        cardsPerPage={cardsPerPage}
        totalCards={renderXYZPendulumEffectMonsterCardData.length}
        paginate={paginate}
      />
    </>
  );
};

export default XYZPendulumEffectMonsterCards;
