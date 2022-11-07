import React, { useState } from "react";
import { useGetRitualEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetRitualEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsImages } from "../../utils/mapCardsImages";

const RitualEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: ritualEffectMonsterCardData,
    isLoading,
    error,
  } = useGetRitualEffectMonsterCardsData();

  const renderRitualEffectMonsterCardData = mapCardsImages(
    ritualEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderRitualEffectMonsterCardData.slice(
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
        totalCards={renderRitualEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RitualEffectMonsterCards;
