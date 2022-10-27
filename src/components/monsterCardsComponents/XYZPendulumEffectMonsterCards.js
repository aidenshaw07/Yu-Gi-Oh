import React, { useState } from "react";
import { useGetXYZPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetXYZPendulumEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const XYZPendulumEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: xyzPendulumEffectMonsterCardData,
    isLoading,
    error,
  } = useGetXYZPendulumEffectMonsterCardsData();

  const renderXYZPendulumEffectMonsterCardData = mapCardsData(
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
    <div>
      {paginatedCurrentCards}
      <PaginateRenderedCards
        cardsPerPage={cardsPerPage}
        totalCards={renderXYZPendulumEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default XYZPendulumEffectMonsterCards;
