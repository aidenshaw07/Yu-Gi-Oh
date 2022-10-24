import React from "react";
import { useGetSynchroMonsterCardsData } from "../../shared/monsterCardsApi/useGetSynchroMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const SynchroMonsterCards = () => {
  const {
    data: synchroMonsterCardData,
    isLoading,
    error,
  } = useGetSynchroMonsterCardsData();

  const renderSynchroMonsterCardData = mapCardsData(synchroMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderSynchroMonsterCardData}</div>;
};

export default SynchroMonsterCards;
