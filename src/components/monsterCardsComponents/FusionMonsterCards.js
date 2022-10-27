import React, { useState } from "react";
import { useGetFusionMonsterCardsData } from "../../shared/monsterCardsApi/useGetFusionMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const FusionMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: fusionMonsterCardData,
    isLoading,
    error,
  } = useGetFusionMonsterCardsData();

  const renderFusionMonsterCardData = mapCardsData(fusionMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderFusionMonsterCardData.slice(
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
        totalCards={renderFusionMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default FusionMonsterCards;
