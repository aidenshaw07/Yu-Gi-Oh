import React, { useState } from "react";
import { useGetXYZMonsterCardsData } from "../../shared/monsterCardsApi/useGetXYZMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

import { Pagination } from "antd";

const XYZMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: xyzMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetXYZMonsterCardsData();

  const renderXYZMonsterCardData = mapCardsImages(xyzMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderXYZMonsterCardData.slice(
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

export default XYZMonsterCards;
