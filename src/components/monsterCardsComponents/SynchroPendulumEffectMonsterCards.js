import React, { useState } from "react";
import { useGetSynchroPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetSynchroPendulumEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const SynchroPendulumEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: synchroPendulumEffectMonsterCardData,
    isLoading,
    error,
  } = useGetSynchroPendulumEffectMonsterCardsData();

  const renderSynchroPendulumEffectMonsterCardData = mapCardsData(
    synchroPendulumEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards =
    renderSynchroPendulumEffectMonsterCardData.slice(
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
        totalCards={renderSynchroPendulumEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SynchroPendulumEffectMonsterCards;
