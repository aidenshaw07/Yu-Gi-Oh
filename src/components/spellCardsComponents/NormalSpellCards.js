import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetNormalSpellCardsData } from "../../shared/spellCardsApi/useGetNormalSpellCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";


const NormalSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 48;
  const {
    data: normalSpellCardData,
    isLoading,
    error,
  } = useGetNormalSpellCardsData();

  const renderNormalSpellCardData = mapCardsImages(normalSpellCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderNormalSpellCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="rendered-mapped-cards">{paginatedCurrentCards}</div>
      <PaginateRenderedCards
        cardsPerPage={cardsPerPage}
        totalCards={renderNormalSpellCardData.length}
        paginate={paginate}
      />
    </>
  );
};

export default NormalSpellCards;
