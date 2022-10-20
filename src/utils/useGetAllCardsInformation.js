import React from "react";
import useSpellCardsApiCall from "./useSpellCardsApiCall";

const useGetAllCardsInformation = () => {
  // const apiCalls = useApiCalls();
  const spellCardsApiCall = useSpellCardsApiCall();

  // const { trapCardData, effectMonsterData } = apiCalls;
  const { normalSpellCardData } = spellCardsApiCall;
  const { fieldSpellCardData } = spellCardsApiCall;
  const { equipSpellCardData } = spellCardsApiCall;
  const { continuousSpellCardData } = spellCardsApiCall;
  const { quickPlaySpellCardData } = spellCardsApiCall;
  const { ritualSpellCardData } = spellCardsApiCall;

  const renderNormalSpellCardData = normalSpellCardData?.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  const renderFieldSpellCardData = fieldSpellCardData?.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  const renderEquipSpellCardData = equipSpellCardData?.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  const renderContinuousSpellCardData = continuousSpellCardData?.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  const renderQuickPlaySpellCardData = quickPlaySpellCardData?.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  const renderRitualSpellCardData = ritualSpellCardData?.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.card_images[0].image_url} alt="card" />
        <p>{item.desc}</p>
        <p>{item.type}</p>
      </div>
    );
  });

  // const renderTrapCardData = trapCardData.map((item) => {
  //   return (
  //     <div key={item.id}>
  //       <h1>{item.name}</h1>
  //       <img src={item.card_images[0].image_url} alt="card" />
  //       <p>{item.desc}</p>
  //       <p>{item.type}</p>
  //     </div>
  //   );
  // });

  // const renderEffectMonsterData = effectMonsterData.map((item) => {
  //   return (
  //     <div key={item.id}>
  //       <h1>{item.name}</h1>
  //       <img src={item.card_images[0].image_url} alt="card" />
  //       <p>{item.desc}</p>
  //       <p>{item.type}</p>
  //     </div>
  //   );
  // });

  return {
    renderNormalSpellCardData,
    renderFieldSpellCardData,
    renderEquipSpellCardData,
    renderContinuousSpellCardData,
    renderQuickPlaySpellCardData,
    renderRitualSpellCardData
    // renderTrapCardData,
    // renderEffectMonsterData,
  };
};

export default useGetAllCardsInformation;
