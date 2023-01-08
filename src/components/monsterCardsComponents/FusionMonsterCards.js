import React, { useState } from "react";
import { useGetFusionMonsterCardsData } from "../../shared/monsterCardsApi/useGetFusionMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import { LoadingOverlay } from "../../shared/Loading";
import "../../styles/renderedMappedCards.scss";
import { Pagination } from "antd";
import { filteredCardsData } from "../../utils/filteredCardsData";

const FusionMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputArea, setInputArea] = useState("");
  const postPerPage = 48;
  const {
    data: fusionMonsterCardData,
    isLoading,
    total,
  } = useGetFusionMonsterCardsData();

  const renderFusionMonsterCardData = mapCardsImages(fusionMonsterCardData);
  const [matchedCards, setMatchedCards] = useState(renderFusionMonsterCardData);
  const renderMatchedCards = filteredCardsData(matchedCards);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderFusionMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handleFilterChange = (e) => {
    let filteredCard = e.target.value;
    setInputArea(filteredCard);
    if (filteredCard === "") {
      setInputArea("");
    }
    const filteredCardsList = fusionMonsterCardData.filter((card) => {
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
        placeholder="Search For Fusion Monster Cards"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) =>
          (e.target.placeholder = "Search For Fusion Monster Cards")
        }
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

export default FusionMonsterCards;
