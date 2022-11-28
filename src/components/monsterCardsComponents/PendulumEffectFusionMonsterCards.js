import React, { useState } from "react";
import { useGetPendulumEffectFusionMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumEffectFusionMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

import { Pagination } from "antd";

const PendulumEffectFusionMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: pendulumEffectFusionMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetPendulumEffectFusionMonsterCardsData();

  const renderPendulumEffectFusionMonsterCardData = mapCardsImages(
    pendulumEffectFusionMonsterCardData
  );

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderPendulumEffectFusionMonsterCardData.slice(
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

export default PendulumEffectFusionMonsterCards;
