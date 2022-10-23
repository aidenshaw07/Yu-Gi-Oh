import React from "react";
import { useGetCounterTrapCardsData } from "../../shared/trapCardsApi/useGetCounterTrapCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const CounterTrapCards = () => {
  const {
    data: counterTrapCardData,
    isLoading,
    error,
  } = useGetCounterTrapCardsData();

  const renderCounterTrapCardData = mapCardsData(counterTrapCardData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{renderCounterTrapCardData}</div>;
};

export default CounterTrapCards;
