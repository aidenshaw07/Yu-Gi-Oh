import React from "react";
import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
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
import MonsterCards from "./categories/MonsterCards";
import EffectMonsterCards from "./components/monsterCardsComponents/EffectMonsterCards";
import FlipEffectMonsterCards from "./components/monsterCardsComponents/FlipEffectMonsterCards";
import GeminiMonsterCards from "./components/monsterCardsComponents/GeminiMonsterCards";
import NormalMonsterCards from "./components/monsterCardsComponents/NormalMonsterCards";
import NormalTunerMonsterCards from "./components/monsterCardsComponents/NormalTunerMonsterCards";
import PendulumEffectMonsterCards from "./components/monsterCardsComponents/PendulumEffectMonsterCards";
import PendulumFlipEffectMonsterCards from "./components/monsterCardsComponents/PendulumFlipEffectMonsterCards";
import PendulumTunerEffectMonsterCards from "./components/monsterCardsComponents/PendulumTunerEffectMonsterCards";
import RitualEffectMonsterCards from "./components/monsterCardsComponents/RitualEffectMonsterCards";
import RitualMonsterCards from "./components/monsterCardsComponents/RitualMonsterCards";
import SpiritMonsterCards from "./components/monsterCardsComponents/SpiritMonsterCards";
import ToonMonsterCards from "./components/monsterCardsComponents/ToonMonsterCards";
import TunerMonsterCards from "./components/monsterCardsComponents/TunerMonsterCards";
import UnionEffectMonsterCards from "./components/monsterCardsComponents/UnionEffectMonsterCards";
import FusionMonsterCards from "./components/monsterCardsComponents/FusionMonsterCards";
import PendulumEffectFusionMonsterCards from "./components/monsterCardsComponents/PendulumEffectFusionMonsterCards";
import LinkMonsterCards from "./components/monsterCardsComponents/LinkMonsterCards";
import SynchroMonsterCards from "./components/monsterCardsComponents/SynchroMonsterCards";
import SynchroPendulumEffectMonsterCards from "./components/monsterCardsComponents/SynchroPendulumEffectMonsterCards";
import SynchroTunerMonsterCards from "./components/monsterCardsComponents/SynchroTunerMonsterCards";
import XYZMonsterCards from "./components/monsterCardsComponents/XYZMonsterCards";
import XYZPendulumEffectMonsterCards from "./components/monsterCardsComponents/XYZPendulumEffectMonsterCards";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spell-cards" element={<SpellCards />} />
        <Route
          path="/spell-cards/normal-spell-cards"
          element={<NormalSpellCards />}
        />
        <Route
          path="/spell-cards/field-spell-cards"
          element={<FieldSpellCards />}
        />
        <Route
          path="/spell-cards/equip-spell-cards"
          element={<EquipSpellCards />}
        />
        <Route
          path="/spell-cards/continuous-spell-cards"
          element={<ContinuousSpellCards />}
        />
        <Route
          path="/spell-cards/quick-play-spell-cards"
          element={<QuickPlaySpellCards />}
        />
        <Route
          path="/spell-cards/ritual-spell-cards"
          element={<RitualSpellCards />}
        />
        <Route path="/trap-cards" element={<TrapCards />} />
        <Route
          path="/trap-cards/normal-trap-cards"
          element={<NormalTrapCards />}
        />
        <Route
          path="/trap-cards/continuous-trap-cards"
          element={<ContinuousTrapCards />}
        />
        <Route
          path="/trap-cards/counter-trap-cards"
          element={<CounterTrapCards />}
        />
        <Route path="/monster-cards" element={<MonsterCards />} />
        <Route
          path="/monster-cards/effect-monster-cards"
          element={<EffectMonsterCards />}
        />
        <Route
          path="/monster-cards/flip-effect-monster-cards"
          element={<FlipEffectMonsterCards />}
        />
        <Route
          path="/monster-cards/gemini-monster-cards"
          element={<GeminiMonsterCards />}
        />
        <Route
          path="/monster-cards/normal-monster-cards"
          element={<NormalMonsterCards />}
        />
        <Route
          path="/monster-cards/normal-tuner-monster-cards"
          element={<NormalTunerMonsterCards />}
        />
        <Route
          path="/monster-cards/pendulum-effect-monster-cards"
          element={<PendulumEffectMonsterCards />}
        />
        <Route
          path="/monster-cards/pendulum-flip-effect-monster-cards"
          element={<PendulumFlipEffectMonsterCards />}
        />
        <Route
          path="/monster-cards/pendulum-tuner-effect-monster-cards"
          element={<PendulumTunerEffectMonsterCards />}
        />
        <Route
          path="/monster-cards/ritual-effect-monster-cards"
          element={<RitualEffectMonsterCards />}
        />
        <Route
          path="/monster-cards/ritual-monster-cards"
          element={<RitualMonsterCards />}
        />
        <Route
          path="/monster-cards/spirit-monster-cards"
          element={<SpiritMonsterCards />}
        />
        <Route
          path="/monster-cards/toon-monster-cards"
          element={<ToonMonsterCards />}
        />
        <Route
          path="/monster-cards/tuner-monster-cards"
          element={<TunerMonsterCards />}
        />
        <Route
          path="/monster-cards/union-effect-monster-cards"
          element={<UnionEffectMonsterCards />}
        />
        <Route
          path="/monster-cards/fusion-monster-cards"
          element={<FusionMonsterCards />}
        />
        <Route
          path="/monster-cards/pendulum-effect-fusion-monster-cards"
          element={<PendulumEffectFusionMonsterCards />}
        />
        <Route
          path="/monster-cards/link-monster-cards"
          element={<LinkMonsterCards />}
        />
        <Route
          path="/monster-cards/synchro-monster-cards"
          element={<SynchroMonsterCards />}
        />
        <Route
          path="/monster-cards/synchro-pendulum-effect-monster-cards"
          element={<SynchroPendulumEffectMonsterCards />}
        />
        <Route
          path="/monster-cards/synchro-tuner-monster-cards"
          element={<SynchroTunerMonsterCards />}
        />
        <Route
          path="/monster-cards/xyz-monster-cards"
          element={<XYZMonsterCards />}
        />
        <Route
          path="/monster-cards/xyz-pendulum-effect-monster-cards"
          element={<XYZPendulumEffectMonsterCards />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
