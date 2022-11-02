import React, { useState } from "react";
import { useGetSynchroTunerMonsterCardsData } from "../../shared/monsterCardsApi/useGetSynchroTunerMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const SynchroTunerMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: synchroTunerMonsterCardData,
    isLoading,
    error,
  } = useGetSynchroTunerMonsterCardsData();

  const renderSynchroTunerMonsterCardData = mapCardsData(
    synchroTunerMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderSynchroTunerMonsterCardData.slice(
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
        totalCards={renderSynchroTunerMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SynchroTunerMonsterCards;
