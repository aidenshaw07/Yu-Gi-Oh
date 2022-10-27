import React, { useState } from "react";
import { useGetXYZMonsterCardsData } from "../../shared/monsterCardsApi/useGetXYZMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const XYZMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: xyzMonsterCardData,
    isLoading,
    error,
  } = useGetXYZMonsterCardsData();

  const renderXYZMonsterCardData = mapCardsData(xyzMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderXYZMonsterCardData.slice(
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
        totalCards={renderXYZMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default XYZMonsterCards;
