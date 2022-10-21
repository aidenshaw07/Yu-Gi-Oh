import React from "react";
import { useGetEquipSpellCardsData } from "../shared/spellCardsApi/useGetEquipSpellCardsData";
import { mapCardsData } from "../utils/mapCardsData";

const EquipSpellCards = () => {
  const {
    data: equipSpellCardData,
    isLoading,
    error,
  } = useGetEquipSpellCardsData();

  const renderEquipSpellCardData = mapCardsData(equipSpellCardData);
  return <div>{renderEquipSpellCardData}</div>;
};

export default EquipSpellCards;
