import React, { useState } from "react";
import PaginateRenderedCards from "../../shared/PaginateRenderedCards";
import { useGetEquipSpellCardsData } from "../../shared/spellCardsApi/useGetEquipSpellCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/paginateRenderedCards.scss";
import { Pagination } from "antd";

const EquipSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 48;
  const {
    data: equipSpellCardData,
    isLoading,
    error,
    total
  } = useGetEquipSpellCardsData();

  const renderEquipSpellCardData = mapCardsImages(equipSpellCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderEquipSpellCardData.slice(
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

export default EquipSpellCards;
