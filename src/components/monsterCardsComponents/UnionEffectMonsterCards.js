import React from "react";
import { useGetUnionEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetUnionEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const UnionEffectMonsterCards = () => {
  const {
    data: unionEffectMonsterCardData,
    isLoading,
    error,
  } = useGetUnionEffectMonsterCardsData();

  const renderUnionEffectMonsterCardData = mapCardsData(
    unionEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderUnionEffectMonsterCardData}</div>;
};

export default UnionEffectMonsterCards;
