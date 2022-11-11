import React, { useState } from "react";
import { useGetCounterTrapCardsData } from "../../shared/trapCardsApi/useGetCounterTrapCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/paginateRenderedCards.scss";
import { Pagination } from "antd";

const CounterTrapCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: counterTrapCardData,
    isLoading,
    error,
    total
  } = useGetCounterTrapCardsData();

  const renderCounterTrapCardData = mapCardsImages(counterTrapCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderCounterTrapCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="rendered-mapped-cards">{paginatedCurrentCards}</div>
      <Pagination
        className="pagination"
        onChange={(value) => setCurrentPage(value)}
        pageSize={postPerPage}
        total={total}
        current={currentPage}
        showQuickJumper
        onShowSizeChange={postPerPage}
        showSizeChanger={false}
      />
    </>
  );
};

export default CounterTrapCards;
