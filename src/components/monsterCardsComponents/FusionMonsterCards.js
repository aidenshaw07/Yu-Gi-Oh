import React from "react";
import { useGetFusionMonsterCardsData } from "../../shared/monsterCardsApi/useGetFusionMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const FusionMonsterCards = () => {
  const {
    data: fusionMonsterCardData,
    isLoading,
    error,
  } = useGetFusionMonsterCardsData();

  const renderFusionMonsterCardData = mapCardsData(fusionMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderFusionMonsterCardData}</div>;
};

export default FusionMonsterCards;
