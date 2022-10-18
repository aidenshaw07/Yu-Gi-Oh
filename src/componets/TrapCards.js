import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const TrapCards = () => {
  const getRenderedTrapCards = useGetAllCardsInformation();

  const { renderTrapCardData } = getRenderedTrapCards;
  return <div>{renderTrapCardData}</div>;
};

export default TrapCards;
