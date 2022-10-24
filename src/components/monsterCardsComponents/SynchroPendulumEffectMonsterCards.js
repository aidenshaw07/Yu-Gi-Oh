import React from "react";
import { useGetSynchroPendulumEffectMonsterCardsData } from "../../shared/monsterCardsApi/useGetSynchroPendulumEffectMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const SynchroPendulumEffectMonsterCards = () => {
  const {
    data: synchroPendulumEffectMonsterCardData,
    isLoading,
    error,
  } = useGetSynchroPendulumEffectMonsterCardsData();

  const renderSynchroPendulumEffectMonsterCardData = mapCardsData(
    synchroPendulumEffectMonsterCardData
  );

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderSynchroPendulumEffectMonsterCardData}</div>;
};

export default SynchroPendulumEffectMonsterCards;
