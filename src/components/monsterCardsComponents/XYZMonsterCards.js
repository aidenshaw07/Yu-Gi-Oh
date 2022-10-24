import React from "react";
import { useGetXYZMonsterCardsData } from "../../shared/monsterCardsApi/useGetXYZMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const XYZMonsterCards = () => {
  const {
    data: xyzMonsterCardData,
    isLoading,
    error,
  } = useGetXYZMonsterCardsData();

  const renderXYZMonsterCardData = mapCardsData(xyzMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderXYZMonsterCardData}</div>;
};

export default XYZMonsterCards;
