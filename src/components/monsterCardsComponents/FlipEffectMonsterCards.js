import React from "react";
import { useGetFlipEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetFlipEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const FlipEffectMonsterCards = () => {
  const {
    data: flipEffectMonsterCardData,
    isLoading,
    error,
  } = useGetFlipEffectMonsterCardsData();

  const renderFlipEffectMonsterCardData = mapCardsData(
    flipEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderFlipEffectMonsterCardData}</div>;
};

export default FlipEffectMonsterCards;
