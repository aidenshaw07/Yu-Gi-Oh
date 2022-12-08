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
import MapCardsInformation from "./utils/MapCardsInformation";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import HowToPlay from "./components/HowToPlay";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spell-cards">
          <Route index element={<SpellCards />} />
          <Route path="normal-spell-cards">
            <Route index element={<NormalSpellCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/spell-cards">
          <Route index element={<SpellCards />} />
          <Route path="field-spell-cards">
            <Route index element={<FieldSpellCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/spell-cards">
          <Route index element={<SpellCards />} />
          <Route path="equip-spell-cards">
            <Route index element={<EquipSpellCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/spell-cards">
          <Route index element={<SpellCards />} />
          <Route path="continuous-spell-cards">
            <Route index element={<ContinuousSpellCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/spell-cards">
          <Route index element={<SpellCards />} />
          <Route path="quick-play-spell-cards">
            <Route index element={<QuickPlaySpellCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/spell-cards">
          <Route index element={<SpellCards />} />
          <Route path="ritual-spell-cards">
            <Route index element={<RitualSpellCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/trap-cards">
          <Route index element={<TrapCards />} />
          <Route path="normal-trap-cards">
            <Route index element={<NormalTrapCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/trap-cards">
          <Route index element={<TrapCards />} />
          <Route path="continuous-trap-cards">
            <Route index element={<ContinuousTrapCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/trap-cards">
          <Route index element={<TrapCards />} />
          <Route path="counter-trap-cards">
            <Route index element={<CounterTrapCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="effect-monster-cards">
            <Route index element={<EffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="flip-effect-monster-cards">
            <Route index element={<FlipEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="gemini-monster-cards">
            <Route index element={<GeminiMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="normal-monster-cards">
            <Route index element={<NormalMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="normal-tuner-monster-cards">
            <Route index element={<NormalTunerMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="pendulum-effect-monster-cards">
            <Route index element={<PendulumEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="pendulum-flip-effect-monster-cards">
            <Route index element={<PendulumFlipEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="pendulum-tuner-effect-monster-cards">
            <Route index element={<PendulumTunerEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="ritual-effect-monster-cards">
            <Route index element={<RitualEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="ritual-monster-cards">
            <Route index element={<RitualMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="spirit-monster-cards">
            <Route index element={<SpiritMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="toon-monster-cards">
            <Route index element={<ToonMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="tuner-monster-cards">
            <Route index element={<TunerMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="union-effect-monster-cards">
            <Route index element={<UnionEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="fusion-monster-cards">
            <Route index element={<FusionMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="pendulum-effect-fusion-monster-cards">
            <Route index element={<PendulumEffectFusionMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="link-monster-cards">
            <Route index element={<LinkMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="synchro-monster-cards">
            <Route index element={<SynchroMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="synchro-pendulum-effect-monster-cards">
            <Route index element={<SynchroPendulumEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="synchro-tuner-monster-cards">
            <Route index element={<SynchroTunerMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="xyz-monster-cards">
            <Route index element={<XYZMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/monster-cards">
          <Route index element={<MonsterCards />} />
          <Route path="xyz-pendulum-effect-monster-cards">
            <Route index element={<XYZPendulumEffectMonsterCards />} />
            <Route path=":cardId" element={<MapCardsInformation />} />
          </Route>
        </Route>
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
