import React from "react";
import useGetAllCardsInformation from "../utils/useGetAllCardsInformation";

const EffectMonsterCards = () => {
  const getRenderedEffectMonsterCards = useGetAllCardsInformation();
  const { renderEffectMonsterData } = getRenderedEffectMonsterCards;
  return <div>{renderEffectMonsterData}</div>;
};

export default EffectMonsterCards;
