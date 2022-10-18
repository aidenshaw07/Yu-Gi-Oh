import axios from "axios";
import { useState, useEffect } from "react";

const useApiCalls = () => {
  const [spellCardData, setSpellCardData] = useState([]);
  const [trapCardData, setTrapCardData] = useState([]);
  const [effectMonsterData, setEffectMonsterData] = useState([]);

  const getSpellCardData = () => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell Card")
      .then((response) => {
        setSpellCardData(response.data.data);
      });
  };

  const getTrapCardData = () => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Trap Card")
      .then((response) => {
        setTrapCardData(response.data.data);
      });
  };

  const getEffectMonsterData = () => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Effect Monster")
      .then((response) => {
        setEffectMonsterData(response.data.data);
      });
  };
  console.log(effectMonsterData);

  useEffect(() => {
    getSpellCardData();
    getTrapCardData();
    getEffectMonsterData();
  }, []);
  return { spellCardData, trapCardData, effectMonsterData };
};

export default useApiCalls;
