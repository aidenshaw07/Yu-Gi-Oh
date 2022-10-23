import React from "react";
import { useGetRitualSpellCardsData } from "../../shared/spellCardsApi/useGetRitualSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const RitualSpellCards = () => {
  const {
    data: ritualSpellCardData,
    isLoading,
    error,
  } = useGetRitualSpellCardsData();

  const renderRitualSpellCardData = mapCardsData(ritualSpellCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderRitualSpellCardData}</div>;
};

export default RitualSpellCards;
