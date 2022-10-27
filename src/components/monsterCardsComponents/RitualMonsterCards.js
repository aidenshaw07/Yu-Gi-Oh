import React, { useState } from "react";
import { useGetRitualMonsterCardsData } from "../../shared/monsterCardsApi/useGetRitualMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const RitualMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: ritualMonsterCardData,
    isLoading,
    error,
  } = useGetRitualMonsterCardsData();

  const renderRitualMonsterCardData = mapCardsData(ritualMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderRitualMonsterCardData.slice(
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
        totalCards={renderRitualMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RitualMonsterCards;
