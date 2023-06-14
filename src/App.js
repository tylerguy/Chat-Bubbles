import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import HowToUse from "./Intro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HowToUse />} />
        <Route path="/chat/:username" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
