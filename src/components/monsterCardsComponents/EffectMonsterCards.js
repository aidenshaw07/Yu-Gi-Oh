import React, { useState } from "react";
import { useGetEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const EffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: effectMonsterCardData,
    isLoading,
    error,
  } = useGetEffectMonsterCardsData();

  const renderEffectMonsterCardData = mapCardsData(effectMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderEffectMonsterCardData.slice(
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
        totalCards={renderEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default EffectMonsterCards;
