import React from "react";
import { useGetLinkMonsterCardsData } from "../../shared/monsterCardsApi/useGetLinkMonsterCardsData";
import { mapCardsData } from "../../utils/mapCardsData";

const LinkMonsterCards = () => {
  const {
    data: linkMonsterCardData,
    isLoading,
    error,
  } = useGetLinkMonsterCardsData();

  const renderLinkMonsterCardData = mapCardsData(linkMonsterCardData);

  if (isLoading) return <div>Loading...</div>;
  return <div>{renderLinkMonsterCardData}</div>;
};

export default LinkMonsterCards;
