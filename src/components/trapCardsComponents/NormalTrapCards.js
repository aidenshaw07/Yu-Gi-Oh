import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetNormalTrapCardsData } from "../../shared/trapCardsApi/useGetNormalTrapCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const NormalTrapCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: normalTrapCardData,
    isLoading,
    error,
  } = useGetNormalTrapCardsData();

  const renderNormalTrapCardData = mapCardsData(normalTrapCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderNormalTrapCardData.slice(
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
        totalCards={renderNormalTrapCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NormalTrapCards;
