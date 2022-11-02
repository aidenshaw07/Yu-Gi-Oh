import React, { useState } from "react";
import { useGetGeminiMonsterCardsData } from "../../shared/monsterCardsApi/useGetGeminiMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const GeminiMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: geminiMonsterCardData,
    isLoading,
    error,
  } = useGetGeminiMonsterCardsData();

  const renderGeminiMonsterCardData = mapCardsData(geminiMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderGeminiMonsterCardData.slice(
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
        totalCards={renderGeminiMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default GeminiMonsterCards;
