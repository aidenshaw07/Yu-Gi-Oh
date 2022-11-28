import React, { useState } from "react";
import { useGetEquipSpellCardsData } from "../../shared/spellCardsApi/useGetEquipSpellCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import { LoadingOverlay } from "../../shared/Loading";
import "../../styles/renderedMappedCards.scss";
import { Pagination } from "antd";

const EquipSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: equipSpellCardData,
    isLoading,
    total,
  } = useGetEquipSpellCardsData();

  const renderEquipSpellCardData = mapCardsImages(equipSpellCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderEquipSpellCardData.slice(
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

export default EquipSpellCards;
