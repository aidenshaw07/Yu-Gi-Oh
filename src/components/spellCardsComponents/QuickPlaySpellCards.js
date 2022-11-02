import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetQuickPlaySpellCardsData } from "../../shared/spellCardsApi/useGetQuickPlaySpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const QuickPlaySpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: quickPlaySpellCardData,
    isLoading,
    error,
  } = useGetQuickPlaySpellCardsData();

  const renderQuickPlaySpellCardData = mapCardsData(quickPlaySpellCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderQuickPlaySpellCardData.slice(
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
        totalCards={renderQuickPlaySpellCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default QuickPlaySpellCards;
