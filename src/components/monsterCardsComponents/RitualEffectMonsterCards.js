import React, { useState } from "react";
import { useGetRitualEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetRitualEffectMonsterCardsData";

import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

import { Pagination } from "antd";

const RitualEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: ritualEffectMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetRitualEffectMonsterCardsData();

  const renderRitualEffectMonsterCardData = mapCardsImages(
    ritualEffectMonsterCardData
  );

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderRitualEffectMonsterCardData.slice(
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

export default RitualEffectMonsterCards;
