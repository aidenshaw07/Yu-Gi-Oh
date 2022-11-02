import React, { useState } from "react";
import { useGetPendulumTunerEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumTunerEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const PendulumTunerEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: pendulumTunerEffectMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumTunerEffectMonsterCardsData();

  const renderPendulumTunerEffectMonsterCardData = mapCardsData(
    pendulumTunerEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderPendulumTunerEffectMonsterCardData.slice(
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
        totalCards={renderPendulumTunerEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PendulumTunerEffectMonsterCards;
