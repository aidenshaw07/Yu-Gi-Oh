import React from "react";
import { useGetNormalMonsterCardsData } from "../../shared/monsterCardsApi/useGetNormalMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const NormalMonsterCards = () => {
  const {
    data: normalMonsterCardData,
    isLoading,
    error,
  } = useGetNormalMonsterCardsData();

  const renderNormalMonsterCardData = mapCardsData(normalMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderNormalMonsterCardData}</div>;
};

export default NormalMonsterCards;
