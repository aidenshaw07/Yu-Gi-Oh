import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetContinuousSpellCardsData } from "../../shared/spellCardsApi/useGetContinuousSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const ContinuousSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: continuousSpellCardData,
    isLoading,
    error,
  } = useGetContinuousSpellCardsData();

  const renderContinuousSpellCardData = mapCardsData(continuousSpellCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderContinuousSpellCardData.slice(
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
        totalCards={renderContinuousSpellCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ContinuousSpellCards;
