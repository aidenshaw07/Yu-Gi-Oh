import React from "react";
import { useGetNormalTrapCardsData } from "../../shared/trapCardsApi/useGetNormalTrapCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const NormalTrapCards = () => {
  const {
    data: normalTrapCardData,
    isLoading,
    error,
  } = useGetNormalTrapCardsData();

  const renderNormalTrapCardData = mapCardsData(normalTrapCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderNormalTrapCardData}</div>;
};

export default NormalTrapCards;
