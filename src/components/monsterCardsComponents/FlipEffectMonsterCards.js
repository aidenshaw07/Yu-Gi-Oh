import React, { useState } from "react";
import { useGetFlipEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetFlipEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const FlipEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: flipEffectMonsterCardData,
    isLoading,
    error,
  } = useGetFlipEffectMonsterCardsData();

  const renderFlipEffectMonsterCardData = mapCardsData(
    flipEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderFlipEffectMonsterCardData.slice(
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
        totalCards={renderFlipEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default FlipEffectMonsterCards;
