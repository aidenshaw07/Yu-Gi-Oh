import React, { useState } from "react";
import { useGetToonMonsterCardsData } from "../../shared/monsterCardsApi/useGetToonMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import "../../styles/pagination.scss";
import { Pagination } from "antd";

const ToonMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: toonMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetToonMonsterCardsData();

  const renderToonMonsterCardData = mapCardsImages(toonMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderToonMonsterCardData.slice(
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

export default ToonMonsterCards;
