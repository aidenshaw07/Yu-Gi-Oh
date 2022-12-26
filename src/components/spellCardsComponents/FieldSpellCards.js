import React, { useState } from "react";
import { useGetFieldSpellCardsData } from "../../shared/spellCardsApi/useGetFieldSpellCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import { LoadingOverlay } from "../../shared/Loading";
import { Pagination } from "antd";
import { filteredCardsData } from "../../utils/filteredCardsData";

const FieldSpellCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputArea, setInputArea] = useState("");
  const postPerPage = 48;
  const {
    data: fieldSpellCardData,
    isLoading,
    total,
  } = useGetFieldSpellCardsData();

  const renderFieldSpellCardData = mapCardsImages(fieldSpellCardData);
  const [matchedCards, setMatchedCards] = useState(renderFieldSpellCardData);
  const renderMatchedCards = filteredCardsData(matchedCards);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderFieldSpellCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handleFilterChange = (e) => {
    let filteredCard = e.target.value;
    setInputArea(filteredCard);
    if (filteredCard === "") {
      setInputArea("");
    }
    const filteredCardsList = fieldSpellCardData.filter((card) => {
      return card.name.toLowerCase().includes(filteredCard.toLowerCase());
    });
    setMatchedCards(filteredCardsList);
  };

  const goToTop = () => window.scrollTo(0, 0);

  if (isLoading) return <LoadingOverlay show={isLoading} />;

  return (
    <div className="rendered-mapped-cards-container">
      <input
        className="filter-input-area"
        type="text"
        placeholder="Search For Field Spell Cards"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Search For Field Spell Cards")}
        onChange={handleFilterChange}
      />
      <div className="rendered-mapped-cards">
        {inputArea === "" ? paginatedCurrentCards : renderMatchedCards}
      </div>
      {inputArea === "" ? (
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
      ) : null}
    </div>
  );
};

export default FieldSpellCards;
