import React, { useState } from "react";
import { useGetEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetEffectMonsterCardsData";
import { mapCardsImages } from "../../utils/mapCardsImages";
import { LoadingOverlay } from "../../shared/Loading";
import "../../styles/renderedMappedCards.scss";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

const EffectMonsterCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputArea, setInputArea] = useState("");
  const postPerPage = 48;
  const {
    data: effectMonsterCardData,
    isLoading,
    total,
  } = useGetEffectMonsterCardsData();

  const renderEffectMonsterCardData = mapCardsImages(effectMonsterCardData);
  const [matchedCards, setMatchedCards] = useState(renderEffectMonsterCardData);
  // console.log(effectMonsterCardData);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;
  const paginatedCurrentCards = renderEffectMonsterCardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  // console.log(inputArea);

  const goToTop = () => window.scrollTo(0, 0);

  const handleFilterChange = (e) => {
    let filteredCard = e.target.value;
    setInputArea(filteredCard);
    if (filteredCard === "") {
      setInputArea("");
    }

    const filteredCardsList = effectMonsterCardData.filter((card) => {
      return card.name.toLowerCase().includes(filteredCard.toLowerCase());
    });
    setMatchedCards(filteredCardsList);
  };

  const renderMatchedCards = matchedCards.map((card) => (
    <div className="mapped-cards-container" key={card.id}>
      <div className="mapped-cards-names">{card.name}</div>
      <Link to={`${card.id}`}>
        <img
          className="map-cards-image"
          src={card.card_images[0].image_url}
          alt={card.name}
        />
      </Link>
    </div>
  ));

  if (isLoading) return <LoadingOverlay show={isLoading} />;

  return (
    <div className="rendered-mapped-cards-container">
      <input type="text" onChange={handleFilterChange} />
      <div className="rendered-mapped-cards">{inputArea === "" ? paginatedCurrentCards : renderMatchedCards}</div>
      {inputArea === "" ? <Pagination
        className="pagination"
        onChange={(value) => setCurrentPage(value)}
        pageSize={postPerPage}
        total={total}
        current={currentPage}
        showQuickJumper
        onShowSizeChange={postPerPage}
        showSizeChanger={false}
        onClick={goToTop()}
      /> : null}
    </div>
  );
};

export default EffectMonsterCards;
