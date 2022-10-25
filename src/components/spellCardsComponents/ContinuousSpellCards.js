import React from "react";
import { useGetContinuousSpellCardsData } from "../../shared/spellCardsApi/useGetContinuousSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const ContinuousSpellCards = () => {
  const {
    data: continuousSpellCardData,
    isLoading,
    error,
  } = useGetContinuousSpellCardsData();

  const renderContinuousSpellCardData = mapCardsData(continuousSpellCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderContinuousSpellCardData}</div>;
};

export default ContinuousSpellCards;