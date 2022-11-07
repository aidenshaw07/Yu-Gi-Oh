import React, { useState } from "react";
import { useGetUnionEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetUnionEffectMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsImages } from "../../utils/mapCardsImages";

const UnionEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: unionEffectMonsterCardData,
    isLoading,
    error,
  } = useGetUnionEffectMonsterCardsData();

  const renderUnionEffectMonsterCardData = mapCardsImages(
    unionEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderUnionEffectMonsterCardData.slice(
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
        totalCards={renderUnionEffectMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default UnionEffectMonsterCards;
