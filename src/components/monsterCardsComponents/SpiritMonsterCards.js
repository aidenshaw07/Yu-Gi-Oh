import React, { useState } from "react";
import { useGetSpiritMonsterCardsData } from "../../shared/monsterCardsApi/useGetSpiritMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const SpiritMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: spiritMonsterCardData,
    isLoading,
    error,
  } = useGetSpiritMonsterCardsData();

  const renderSpiritMonsterCardData = mapCardsData(spiritMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderSpiritMonsterCardData.slice(
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
        totalCards={renderSpiritMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SpiritMonsterCards;
