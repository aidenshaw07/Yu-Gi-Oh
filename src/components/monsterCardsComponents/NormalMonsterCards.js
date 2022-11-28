import React, { useState } from "react";
import { useGetNormalMonsterCardsData } from "../../shared/monsterCardsApi/useGetNormalMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

import { Pagination } from "antd";

const NormalMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: normalMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetNormalMonsterCardsData();

  const renderNormalMonsterCardData = mapCardsImages(normalMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderNormalMonsterCardData.slice(
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

export default NormalMonsterCards;
