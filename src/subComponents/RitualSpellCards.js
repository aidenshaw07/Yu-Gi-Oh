import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const RitualSpellCards = () => {
  const getRenderedRitualSpellCards = useGetAllCardsInformation();
  const { renderRitualSpellCardData } = getRenderedRitualSpellCards;
  return <div>{renderRitualSpellCardData}</div>;
};

export default RitualSpellCards;
