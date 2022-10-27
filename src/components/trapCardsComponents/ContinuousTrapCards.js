import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetContinuousTrapCardsData } from "../../shared/trapCardsApi/useGetContinuousTrapCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const ContinuousTrapCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: continuousTrapCardData,
    isLoading,
    error,
  } = useGetContinuousTrapCardsData();

  const renderContinuousTrapCardData = mapCardsData(continuousTrapCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderContinuousTrapCardData.slice(
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
        totalCards={renderContinuousTrapCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ContinuousTrapCards;
