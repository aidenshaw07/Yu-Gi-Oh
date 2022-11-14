import React, { useState } from "react";
import { useGetUnionEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetUnionEffectMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import "../../styles/pagination.scss";
import { Pagination } from "antd";

const UnionEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: unionEffectMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetUnionEffectMonsterCardsData();

  const renderUnionEffectMonsterCardData = mapCardsImages(
    unionEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderUnionEffectMonsterCardData.slice(
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

export default UnionEffectMonsterCards;
