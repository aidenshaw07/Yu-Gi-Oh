import React from "react";
import { useGetGeminiMonsterCardsData } from "../../shared/monsterCardsApi/useGetGeminiMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const GeminiMonsterCards = () => {
  const {
    data: geminiMonsterCardData,
    isLoading,
    error,
  } = useGetGeminiMonsterCardsData();

  const renderGeminiMonsterCardData = mapCardsData(geminiMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderGeminiMonsterCardData}</div>;
};

export default GeminiMonsterCards;
