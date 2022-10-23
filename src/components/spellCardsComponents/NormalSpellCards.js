import React from "react";
import { useGetNormalSpellCardsData } from "../../shared/spellCardsApi/useGetNormalSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const NormalSpellCards = () => {
  const {
    data: normalSpellCardData,
    isLoading,
    error,
  } = useGetNormalSpellCardsData();

  const renderNormalSpellCardData = mapCardsData(normalSpellCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderNormalSpellCardData}</div>;
};

export default NormalSpellCards;
