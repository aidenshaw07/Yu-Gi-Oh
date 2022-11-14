import React, { useState } from "react";
import { useGetSynchroTunerMonsterCardsData } from "../../shared/monsterCardsApi/useGetSynchroTunerMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import "../../styles/pagination.scss";
import { Pagination } from "antd";

const SynchroTunerMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: synchroTunerMonsterCardData,
    isLoading,
    error,
    total,
  } = useGetSynchroTunerMonsterCardsData();

  const renderSynchroTunerMonsterCardData = mapCardsImages(
    synchroTunerMonsterCardData
  );

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderSynchroTunerMonsterCardData.slice(
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

export default SynchroTunerMonsterCards;
