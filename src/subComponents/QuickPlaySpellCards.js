import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const QuickPlaySpellCards = () => {
  const getRenderedQuickPlaySpellCards = useGetAllCardsInformation();
  const { renderQuickPlaySpellCardData } = getRenderedQuickPlaySpellCards;
  return <div>{renderQuickPlaySpellCardData}</div>;
};

export default QuickPlaySpellCards;
