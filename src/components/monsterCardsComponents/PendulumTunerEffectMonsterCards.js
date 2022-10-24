import React from "react";
import { useGetPendulumTunerEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetPendulumTunerEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const PendulumTunerEffectMonsterCards = () => {
  const {
    data: pendulumTunerEffectMonsterCardData,
    isLoading,
    error,
  } = useGetPendulumTunerEffectMonsterCardsData();

  const renderPendulumTunerEffectMonsterCardData = mapCardsData(
    pendulumTunerEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderPendulumTunerEffectMonsterCardData}</div>;
};

export default PendulumTunerEffectMonsterCards;
