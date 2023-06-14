import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:username" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
