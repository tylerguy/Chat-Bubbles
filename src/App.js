import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import UsernameForm from "./UsernameForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:username" element={<Chat />} />
        <Route path="/" element={<UsernameForm />} />
      </Routes>
    </Router>
  );
}

export default App;
