import React, { useState } from "react";
import { useGetRitualEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetRitualEffectMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import "../../styles/renderedMappedCards.scss";
import { LoadingOverlay } from "../../shared/Loading";
import { Pagination } from "antd";
import { filteredCardsData } from "../../utils/filteredCardsData";

const RitualEffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputArea, setInputArea] = useState("");
  const postPerPage = 48;
  const {
    data: ritualEffectMonsterCardData,
    isLoading,
    total,
  } = useGetRitualEffectMonsterCardsData();

  const renderRitualEffectMonsterCardData = mapCardsImages(
    ritualEffectMonsterCardData
  );
  const [matchedCards, setMatchedCards] = useState(renderRitualEffectMonsterCardData);
  const renderMatchedCards = filteredCardsData(matchedCards);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderRitualEffectMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );
  
  const handleFilterChange = (e) => {
    let filteredCard = e.target.value;
    setInputArea(filteredCard);
    if (filteredCard === "") {
      setInputArea("");
    }
    const filteredCardsList = ritualEffectMonsterCardData.filter((card) => {
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
        placeholder="Search For Ritual Effect Monster Cards"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) =>
          (e.target.placeholder = "Search For Ritual Effect Monster Cards")
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

export default RitualEffectMonsterCards;
