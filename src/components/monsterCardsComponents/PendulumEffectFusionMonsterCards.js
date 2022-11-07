import React, { useState } from "react";
import { useGetPendulumEffectFusionMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumEffectFusionMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsImages } from "../../utils/mapCardsImages";

const PendulumEffectFusionMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: pendulumEffectFusionMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumEffectFusionMonsterCardsData();

  const renderPendulumEffectFusionMonsterCardData = mapCardsImages(
    pendulumEffectFusionMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderPendulumEffectFusionMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {paginatedCurrentCards}
      <PaginateRenderedCards
        cardsPerPage={cardsPerPage}
        totalCards={renderPendulumEffectFusionMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PendulumEffectFusionMonsterCards;
