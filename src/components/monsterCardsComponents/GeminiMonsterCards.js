import React, { useState } from "react";
import { useGetGeminiMonsterCardsData } from "../../shared/monsterCardsApi/useGetGeminiMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

import { Pagination } from "antd";

const GeminiMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: geminiMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetGeminiMonsterCardsData();

  const renderGeminiMonsterCardData = mapCardsImages(geminiMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderGeminiMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

export default GeminiMonsterCards;
