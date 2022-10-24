import React from "react";
import { useGetPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const PendulumEffectMonsterCards = () => {
  const {
    data: pendulumEffectMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumEffectMonsterCardsData();

  const renderPendulumEffectMonsterCardData = mapCardsData(
    pendulumEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderPendulumEffectMonsterCardData}</div>;
};

export default PendulumEffectMonsterCards;
