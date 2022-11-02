import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetFieldSpellCardsData } from "../../shared/spellCardsApi/useGetFieldSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const FieldSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: fieldSpellCardData,
    isLoading,
    error,
  } = useGetFieldSpellCardsData();

  const renderFieldSpellCardData = mapCardsData(fieldSpellCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderFieldSpellCardData.slice(
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
        totalCards={renderFieldSpellCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default FieldSpellCards;
