import React, { useState } from "react";

import { useGetQuickPlaySpellCardsData } from "../../shared/spellCardsApi/useGetQuickPlaySpellCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";

import { Pagination } from "antd";

const QuickPlaySpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: quickPlaySpellCardData,
    isLoading,
    error,
    total,
  } = useGetQuickPlaySpellCardsData();

  const renderQuickPlaySpellCardData = mapCardsImages(quickPlaySpellCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderQuickPlaySpellCardData.slice(
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

export default QuickPlaySpellCards;
