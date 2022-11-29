import React, { useState } from "react";
import { useGetContinuousTrapCardsData } from "../../shared/trapCardsApi/useGetContinuousTrapCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import { LoadingOverlay } from "../../shared/Loading";
import "../../styles/renderedMappedCards.scss";
import { Pagination } from "antd";

const ContinuousTrapCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: continuousTrapCardData,
    isLoading,
    total,
  } = useGetContinuousTrapCardsData();

  const renderContinuousTrapCardData = mapCardsImages(continuousTrapCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderContinuousTrapCardData.slice(
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

export default ContinuousTrapCards;
