import React, { useState } from "react";
import { useGetXYZPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetXYZPendulumEffectMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import "../../styles/pagination.scss";
import { Pagination } from "antd";

const XYZPendulumEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: xyzPendulumEffectMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetXYZPendulumEffectMonsterCardsData();

  const renderXYZPendulumEffectMonsterCardData = mapCardsImages(
    xyzPendulumEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderXYZPendulumEffectMonsterCardData.slice(
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

export default XYZPendulumEffectMonsterCards;
