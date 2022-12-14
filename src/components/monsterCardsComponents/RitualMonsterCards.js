import React, { useState } from "react";
import { useGetRitualMonsterCardsData } from "../../shared/monsterCardsApi/useGetRitualMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import { Pagination } from "antd";
import { LoadingOverlay } from "../../shared/Loading";

const RitualMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: ritualMonsterCardData,
    isLoading,
    total,
  } = useGetRitualMonsterCardsData();

  const renderRitualMonsterCardData = mapCardsImages(ritualMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderRitualMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const goToTop = () => window.scrollTo(0, 0);

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
        onClick={goToTop()}
      />
    </div>
  );
};

export default RitualMonsterCards;
