import React from "react";
import { useGetSynchroTunerMonsterCardsData } from "../../shared/monsterCardsApi/useGetSynchroTunerMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const SynchroTunerMonsterCards = () => {
  const {
    data: synchroTunerMonsterCardData,
    isLoading,
    error,
  } = useGetSynchroTunerMonsterCardsData();

  const renderSynchroTunerMonsterCardData = mapCardsData(
    synchroTunerMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderSynchroTunerMonsterCardData}</div>;
};

export default SynchroTunerMonsterCards;
