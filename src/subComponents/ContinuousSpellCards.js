import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const ContinuousSpellCards = () => {
  const getRenderedContinuousSpellCards = useGetAllCardsInformation();

  const { renderContinuousSpellCardData } = getRenderedContinuousSpellCards;
  return <div>{renderContinuousSpellCardData}</div>;
};

export default ContinuousSpellCards;
