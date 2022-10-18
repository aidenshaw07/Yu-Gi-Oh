import React from "react";
import useApiCalls from "./useApiCalls";

const useGetAllCardsInformation = () => {
  const apiCalls = useApiCalls();

  const { spellCardData, trapCardData, effectMonsterData } = apiCalls;
  const renderSpellCardData = spellCardData.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  const renderTrapCardData = trapCardData.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  const renderEffectMonsterData = effectMonsterData.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  return { renderSpellCardData, renderTrapCardData, renderEffectMonsterData };
};

export default useGetAllCardsInformation;
