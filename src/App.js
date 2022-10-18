import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./componets/Home";
import SpellCards from "./componets/SpellCards";
import TrapCards from "./componets/TrapCards";
import MonsterCards from "./componets/MonsterCards";
import EffectMonsterCards from "./componets/EffectMonsterCards";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spell-cards" element={<SpellCards />} />
        <Route path="/trap-cards" element={<TrapCards />} />
        <Route path="/monster-cards" element={<MonsterCards />} />
        <Route path="effect-monster-cards" element={<EffectMonsterCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
