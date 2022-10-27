import React, { useState } from "react";
import { useGetPendulumFlipEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumFlipEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const PendulumFlipEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: pendulumFlipEffectMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumFlipEffectMonsterCardsData();

  const renderPendulumFlipEffectMonsterCardData = mapCardsData(
    pendulumFlipEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderPendulumFlipEffectMonsterCardData.slice(
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
        totalCards={renderPendulumFlipEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PendulumFlipEffectMonsterCards;
