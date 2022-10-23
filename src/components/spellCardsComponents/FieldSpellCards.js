import React from "react";
import { useGetFieldSpellCardsData } from "../../shared/spellCardsApi/useGetFieldSpellCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const FieldSpellCards = () => {
  const {
    data: fieldSpellCardData,
    isLoading,
    error,
  } = useGetFieldSpellCardsData();

  const renderFieldSpellCardData = mapCardsData(fieldSpellCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderFieldSpellCardData}</div>;
};

export default FieldSpellCards;
