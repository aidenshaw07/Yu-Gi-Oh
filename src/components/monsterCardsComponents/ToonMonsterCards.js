import React, { useState } from "react";
import { useGetToonMonsterCardsData } from "../../shared/monsterCardsApi/useGetToonMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const ToonMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: toonMonsterCardData,
    isLoading,
    error,
  } = useGetToonMonsterCardsData();

  const renderToonMonsterCardData = mapCardsData(toonMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderToonMonsterCardData.slice(
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
        totalCards={renderToonMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ToonMonsterCards;
