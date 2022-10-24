import React from "react";
import { useGetNormalTunerMonsterCardsData } from "../../shared/monsterCardsApi/useGetNormalTunerMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const NormalTunerMonsterCards = () => {
  const {
    data: normalTunerMonsterCardData,
    isLoading,
    error,
  } = useGetNormalTunerMonsterCardsData();

  const renderNormalTunerMonsterCardData = mapCardsData(
    normalTunerMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderNormalTunerMonsterCardData}</div>;
};

export default NormalTunerMonsterCards;
