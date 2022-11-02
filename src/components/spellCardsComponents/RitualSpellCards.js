import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetRitualSpellCardsData } from "../../shared/spellCardsApi/useGetRitualSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const RitualSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: ritualSpellCardData,
    isLoading,
    error,
  } = useGetRitualSpellCardsData();

  const renderRitualSpellCardData = mapCardsData(ritualSpellCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderRitualSpellCardData.slice(
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
        totalCards={renderRitualSpellCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RitualSpellCards;
