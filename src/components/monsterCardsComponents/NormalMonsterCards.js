import React, { useState } from "react";
import { useGetNormalMonsterCardsData } from "../../shared/monsterCardsApi/useGetNormalMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const NormalMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: normalMonsterCardData,
    isLoading,
    error,
  } = useGetNormalMonsterCardsData();

  const renderNormalMonsterCardData = mapCardsData(normalMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderNormalMonsterCardData.slice(
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
        totalCards={renderNormalMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NormalMonsterCards;
