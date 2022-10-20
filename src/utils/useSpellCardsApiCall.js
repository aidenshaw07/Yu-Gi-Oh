import axios from "axios";
import { useState, useEffect } from "react";

const useSpellCardsApiCall = () => {
  const [normalSpellCardData, setNormalSpellCardData] = useState([]);
  const [fieldSpellCardData, setFieldSpellCardData] = useState([]);
  const [equipSpellCardData, setEquipSpellCardData] = useState([]);
  const [continuousSpellCardData, setContinuousSpellCardData] = useState([]);
  const [quickPlaySpellCardData, setQuickPlaySpellCardData] = useState([]);
  const [ritualSpellCardData, setRitualSpellCardData] = useState([]);

  const getNormalSpellCardData = () => {
    axios
      .get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card&race=Normal"
      )
      .then((response) => {
        setNormalSpellCardData(response.data.data);
      });
  };

  const getFieldSpellCardData = () => {
    axios
      .get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card&race=Field"
      )
      .then((response) => {
        setFieldSpellCardData(response.data.data);
      });
  };

  const getEquipSpellCardData = () => {
    axios
      .get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card&race=Equip"
      )
      .then((response) => {
        setEquipSpellCardData(response.data.data);
      });
  };

  const getContinuousSpellCardData = () => {
    axios
      .get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card&race=Continuous"
      )
      .then((response) => {
        setContinuousSpellCardData(response.data.data);
      });
  };

  const getQuickPlaySpellCardData = () => {
    axios
      .get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card&race=quick-play"
      )
      .then((response) => {
        setQuickPlaySpellCardData(response.data.data);
      });
  };

  const getRitualSpellCardData = () => {
    axios
      .get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card&race=Ritual"
      )
      .then((response) => {
        setRitualSpellCardData(response.data.data);
      });
  };

  useEffect(() => {
    getNormalSpellCardData();
    getFieldSpellCardData();
    getEquipSpellCardData();
    getContinuousSpellCardData();
    getQuickPlaySpellCardData();
    getRitualSpellCardData();
  }, []);

  return {
    normalSpellCardData,
    fieldSpellCardData,
    equipSpellCardData,
    continuousSpellCardData,
    quickPlaySpellCardData,
    ritualSpellCardData
  };
};

export default useSpellCardsApiCall;
