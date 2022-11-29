import React, { useState } from "react";
import { useGetGeminiMonsterCardsData } from "../../shared/monsterCardsApi/useGetGeminiMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import { LoadingOverlay } from "../../shared/Loading";
import "../../styles/renderedMappedCards.scss";
import { Pagination } from "antd";

const GeminiMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: geminiMonsterCardData,
    isLoading,
    total,
  } = useGetGeminiMonsterCardsData();

  const renderGeminiMonsterCardData = mapCardsImages(geminiMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderGeminiMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const goToTop = () => window.scrollTo(0, 0);

  if (isLoading) return <LoadingOverlay show={isLoading} />;

  return (
    <div className="rendered-mapped-cards-container">
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
        onClick={goToTop()}
      />
    </div>
  );
};

export default GeminiMonsterCards;
