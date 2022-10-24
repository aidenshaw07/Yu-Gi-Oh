import React from "react";
import { useGetRitualEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetRitualEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const RitualEffectMonsterCards = () => {
  const {
    data: ritualEffectMonsterCardData,
    isLoading,
    error,
  } = useGetRitualEffectMonsterCardsData();

  const renderRitualEffectMonsterCardData = mapCardsData(
    ritualEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderRitualEffectMonsterCardData}</div>;
};

export default RitualEffectMonsterCards;
