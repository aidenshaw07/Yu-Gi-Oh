import React, { useState } from "react";
import { useGetPendulumTunerEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumTunerEffectMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import { LoadingOverlay } from "../../shared/Loading";
import "../../styles/renderedMappedCards.scss";
import { Pagination } from "antd";

const PendulumTunerEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: pendulumTunerEffectMonsterCardData,
    isLoading,
    total,
  } = useGetPendulumTunerEffectMonsterCardsData();

  const renderPendulumTunerEffectMonsterCardData = mapCardsImages(
    pendulumTunerEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderPendulumTunerEffectMonsterCardData.slice(
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

export default PendulumTunerEffectMonsterCards;
