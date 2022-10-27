import React, { useState } from "react";
import { useGetLinkMonsterCardsData } from "../../shared/monsterCardsApi/useGetLinkMonsterCardsData";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { mapCardsData } from "../../utils/mapCardsData";

const LinkMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: linkMonsterCardData,
    isLoading,
    error,
  } = useGetLinkMonsterCardsData();

  const renderLinkMonsterCardData = mapCardsData(linkMonsterCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderLinkMonsterCardData.slice(
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
        totalCards={renderLinkMonsterCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default LinkMonsterCards;
