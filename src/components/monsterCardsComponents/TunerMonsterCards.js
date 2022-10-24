import React from "react";
import { useGetTunerMonsterCardsData } from "../../shared/monsterCardsApi/useGetTunerMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const TunerMonsterCards = () => {
  const {
    data: tunerMonsterCardData,
    isLoading,
    error,
  } = useGetTunerMonsterCardsData();

  const renderTunerMonsterCardData = mapCardsData(tunerMonsterCardData);

  if (isLoading) return <div>Loading...</div>
  return <div>{renderTunerMonsterCardData}</div>;
};

export default TunerMonsterCards;
