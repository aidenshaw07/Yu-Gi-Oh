import React from "react";
import { useGetSpiritMonsterCardsData } from "../../shared/monsterCardsApi/useGetSpiritMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const SpiritMonsterCards = () => {
  const {
    data: spiritMonsterCardData,
    isLoading,
    error,
  } = useGetSpiritMonsterCardsData();

  const renderSpiritMonsterCardData = mapCardsData(spiritMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderSpiritMonsterCardData}</div>;
};

export default SpiritMonsterCards;
