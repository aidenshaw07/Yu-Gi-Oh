import React from "react";
import { useGetPendulumFlipEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumFlipEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const PendulumFlipEffectMonsterCards = () => {
  const {
    data: pendulumFlipEffectMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumFlipEffectMonsterCardsData();

  const renderPendulumFlipEffectMonsterCardData = mapCardsData(
    pendulumFlipEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderPendulumFlipEffectMonsterCardData}</div>;
};

export default PendulumFlipEffectMonsterCards;
