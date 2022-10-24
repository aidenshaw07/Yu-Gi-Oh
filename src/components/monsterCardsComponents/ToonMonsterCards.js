import React from "react";
import { useGetToonMonsterCardsData } from "../../shared/monsterCardsApi/useGetToonMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const ToonMonsterCards = () => {
  const {
    data: toonMonsterCardData,
    isLoading,
    error,
  } = useGetToonMonsterCardsData();

  const renderToonMonsterCardData = mapCardsData(toonMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderToonMonsterCardData}</div>;
};

export default ToonMonsterCards;
