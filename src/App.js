import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import UsernameForm from "./UsernameForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernameForm />} />
        <Route path="/chat/:username" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
