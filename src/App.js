import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./componets/Home";
import SpellCards from "./componets/SpellCards";
import NormalSpellCards from "./subComponents/NormalSpellCards";
import FieldSpellCards from "./subComponents/FieldSpellCards";
import EquipSpellCards from "./subComponents/EquipSpellCards";
import ContinuousSpellCards from "./subComponents/ContinuousSpellCards";
import QuickPlaySpellCards from "./subComponents/QuickPlaySpellCards";
import RitualSpellCards from "./subComponents/RitualSpellCards";
import TrapCards from "./componets/TrapCards";
import NormalTrapCards from "./subComponents/NormalTrapCards";
import MonsterCards from "./componets/MonsterCards";
import EffectMonsterCards from "./componets/EffectMonsterCards";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spell-cards" element={<SpellCards />} />
        <Route path="/normal-spell-cards" element={<NormalSpellCards />} />
        <Route path="/field-spell-cards" element={<FieldSpellCards />} />
        <Route path="/equip-spell-cards" element={<EquipSpellCards />} />
        <Route
          path="/continuous-spell-cards"
          element={<ContinuousSpellCards />}
        />
        <Route
          path="/quick-play-spell-cards"
          element={<QuickPlaySpellCards />}
        />
        <Route path="/ritual-spell-cards" element={<RitualSpellCards />} />
        <Route path="/trap-cards" element={<TrapCards />} />
        <Route path="/normal-trap-cards" element={<NormalTrapCards />} />
        <Route path="/monster-cards" element={<MonsterCards />} />
        <Route path="effect-monster-cards" element={<EffectMonsterCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
