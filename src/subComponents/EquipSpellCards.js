import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const EquipSpellCards = () => {
  const getRenderedEquipSpellCards = useGetAllCardsInformation();

  const { renderEquipSpellCardData } = getRenderedEquipSpellCards;
  return <div>{renderEquipSpellCardData}</div>;
};

export default EquipSpellCards;
