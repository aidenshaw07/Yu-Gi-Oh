import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetCounterTrapCardsData } from "../../shared/trapCardsApi/useGetCounterTrapCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const CounterTrapCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const {
    data: counterTrapCardData,
    isLoading,
    error,
  } = useGetCounterTrapCardsData();

  const renderCounterTrapCardData = mapCardsData(counterTrapCardData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const paginatedCurrentCards = renderCounterTrapCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div>{paginatedCurrentCards}</div>
      <PaginateRenderedCards
        cardsPerPage={cardsPerPage}
        totalCards={renderCounterTrapCardData.length}
        paginate={paginate}
      />
    </>
  );
};

export default CounterTrapCards;
