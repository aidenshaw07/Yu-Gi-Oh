import React, { useState } from "react";
import { useGetTunerMonsterCardsData } from "../../shared/monsterCardsApi/useGetTunerMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsImages } from "../../utils/mapCardsImages";

const TunerMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: tunerMonsterCardData,
    isLoading,
    error,
  } = useGetTunerMonsterCardsData();

  const renderTunerMonsterCardData = mapCardsImages(tunerMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderTunerMonsterCardData.slice(
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
        totalCards={renderTunerMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default TunerMonsterCards;
