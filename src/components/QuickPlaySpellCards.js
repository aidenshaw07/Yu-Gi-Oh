import React from "react";
import { useGetQuickPlaySpellCardsData } from "../shared/spellCardsApi/useGetQuickPlaySpellCardsData";
import { mapCardsData } from "../utils/mapCardsData";

const QuickPlaySpellCards = () => {
  const {
    data: quickPlaySpellCardData,
    isLoading,
    error,
  } = useGetQuickPlaySpellCardsData();

  const renderQuickPlaySpellCardData = mapCardsData(quickPlaySpellCardData);
  return <div>{renderQuickPlaySpellCardData}</div>;
};

export default QuickPlaySpellCards;
