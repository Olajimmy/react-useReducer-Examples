import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AdventureParty from "./pages/AdventureParty";
import Counter from "./pages/Counter";

function App() {
  return (
    <>
      <h1>THis is my notes for useReducer</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventureparty" element={<AdventureParty />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
