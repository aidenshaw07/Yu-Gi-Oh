import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const NormalSpellCards = () => {
  const getRenderedNormalSpellCardData = useGetAllCardsInformation();

  const { renderNormalSpellCardData } = getRenderedNormalSpellCardData;

  return <div>{renderNormalSpellCardData}</div>;
};

export default NormalSpellCards;
