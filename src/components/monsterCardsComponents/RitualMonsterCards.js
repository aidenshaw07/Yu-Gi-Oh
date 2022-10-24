import React from "react";
import { useGetRitualMonsterCardsData } from "../../shared/monsterCardsApi/useGetRitualMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const RitualMonsterCards = () => {
  const {
    data: ritualMonsterCardData,
    isLoading,
    error,
  } = useGetRitualMonsterCardsData();

  const renderRitualMonsterCardData = mapCardsData(ritualMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderRitualMonsterCardData}</div>;
};

export default RitualMonsterCards;
