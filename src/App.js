import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./categories/Home";
import SpellCards from "./categories/SpellCards";
import TrapCards from "./categories/TrapCards";
import NormalSpellCards from "./components/spellCardsComponents/NormalSpellCards";
import FieldSpellCards from "./components/spellCardsComponents/FieldSpellCards";
import EquipSpellCards from "./components/spellCardsComponents/EquipSpellCards";
import ContinuousSpellCards from "./components/spellCardsComponents/ContinuousSpellCards";
import QuickPlaySpellCards from "./components/spellCardsComponents/QuickPlaySpellCards";
import RitualSpellCards from "./components/spellCardsComponents/RitualSpellCards";
import NormalTrapCards from "./components/trapCardsComponents/NormalTrapCards";
import ContinuousTrapCards from "./components/trapCardsComponents/ContinuousTrapCards";
import CounterTrapCards from "./components/trapCardsComponents/CounterTrapCards";

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
        <Route path="/continuous-trap-cards" element={<ContinuousTrapCards />} />
        <Route path="/counter-trap-cards" element={<CounterTrapCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
