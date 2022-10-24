import React from "react";
import { useGetEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const EffectMonsterCards = () => {
  const {
    data: effectMonsterCardData,
    isLoading,
    error,
  } = useGetEffectMonsterCardsData();

  const renderEffectMonsterCardData = mapCardsData(effectMonsterCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderEffectMonsterCardData}</div>;
};

export default EffectMonsterCards;
