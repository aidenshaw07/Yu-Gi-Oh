import React from "react";
import { useGetPendulumEffectFusionMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumEffectFusionMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const PendulumEffectFusionMonsterCards = () => {
  const {
    data: pendulumEffectFusionMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumEffectFusionMonsterCardsData();

  const renderPendulumEffectFusionMonsterCardData = mapCardsData(
    pendulumEffectFusionMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderPendulumEffectFusionMonsterCardData}</div>;
};

export default PendulumEffectFusionMonsterCards;
