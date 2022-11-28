import React, { useState } from "react";
import { useGetFusionMonsterCardsData } from "../../shared/monsterCardsApi/useGetFusionMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

import { Pagination } from "antd";

const FusionMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: fusionMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetFusionMonsterCardsData();

  const renderFusionMonsterCardData = mapCardsImages(fusionMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderFusionMonsterCardData.slice(
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

export default FusionMonsterCards;
