import React, { useState } from "react";
import { useGetPendulumFlipEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumFlipEffectMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import { LoadingOverlay } from "../../shared/Loading";
import { Pagination } from "antd";

const PendulumFlipEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: pendulumFlipEffectMonsterCardData,
    isLoading,
    total,
  } = useGetPendulumFlipEffectMonsterCardsData();

  const renderPendulumFlipEffectMonsterCardData = mapCardsImages(
    pendulumFlipEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderPendulumFlipEffectMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

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
      />
    </div>
  );
};

export default PendulumFlipEffectMonsterCards;
