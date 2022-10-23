import React from "react";
import { useGetContinuousTrapCardsData } from "../../shared/trapCardsApi/useGetContinuousTrapCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const ContinuousTrapCards = () => {
  const {
    data: continuousTrapCardData,
    isLoading,
    error,
  } = useGetContinuousTrapCardsData();

  const renderContinuousTrapCardData = mapCardsData(continuousTrapCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderContinuousTrapCardData}</div>;
};

export default ContinuousTrapCards;
