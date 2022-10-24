import React from "react";
import { useGetXYZPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetXYZPendulumEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const XYZPendulumEffectMonsterCards = () => {
  const {
    data: xyzPendulumEffectMonsterCardData,
    isLoading,
    error,
  } = useGetXYZPendulumEffectMonsterCardsData();

  const renderXYZPendulumEffectMonsterCardData = mapCardsData(
    xyzPendulumEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderXYZPendulumEffectMonsterCardData}</div>;
};

export default XYZPendulumEffectMonsterCards;
