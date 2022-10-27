import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetEquipSpellCardsData } from "../../shared/spellCardsApi/useGetEquipSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const EquipSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: equipSpellCardData,
    isLoading,
    error,
  } = useGetEquipSpellCardsData();

  const renderEquipSpellCardData = mapCardsData(equipSpellCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderEquipSpellCardData.slice(
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
        totalCards={renderEquipSpellCardData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default EquipSpellCards;
