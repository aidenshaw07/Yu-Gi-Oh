import React, { useState } from "react";
import { useGetSynchroMonsterCardsData } from "../../shared/monsterCardsApi/useGetSynchroMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const SynchroMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: synchroMonsterCardData,
    isLoading,
    error,
  } = useGetSynchroMonsterCardsData();

  const renderSynchroMonsterCardData = mapCardsData(synchroMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderSynchroMonsterCardData.slice(
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
        totalCards={renderSynchroMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SynchroMonsterCards;
