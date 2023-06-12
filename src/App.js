import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import UsernameForm from "./UsernameForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Chat-Bubbles/" element={<UsernameForm />} />
        <Route path="Chat-Bubbles/chat/:username" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
