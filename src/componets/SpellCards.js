import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const SpellCards = () => {
  const getRenderedSpellCards = useGetAllCardsInformation();

  const { renderSpellCardData } = getRenderedSpellCards;

  return <div>{renderSpellCardData}</div>;
};

export default SpellCards;
