import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetNormalSpellCardsData } from "../../shared/spellCardsApi/useGetNormalSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const NormalSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: normalSpellCardData,
    isLoading,
    error,
  } = useGetNormalSpellCardsData();

  const renderNormalSpellCardData = mapCardsData(normalSpellCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderNormalSpellCardData.slice(
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
        totalCards={renderNormalSpellCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NormalSpellCards;
