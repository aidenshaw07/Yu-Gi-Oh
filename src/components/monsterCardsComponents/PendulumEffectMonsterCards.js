import React, { useState } from "react";
import { useGetPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const PendulumEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: pendulumEffectMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumEffectMonsterCardsData();

  const renderPendulumEffectMonsterCardData = mapCardsData(
    pendulumEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderPendulumEffectMonsterCardData.slice(
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
        totalCards={renderPendulumEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PendulumEffectMonsterCards;
