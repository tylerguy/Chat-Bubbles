import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UsernameForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/chat/${username}`);
  };

  return (
    <div id="username-form">
      <form onSubmit={handleSubmit}>
        <label id="username-label">
          Enter your username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <button type="submit">Enter Chat</button>
      </form>
    </div>
  );
}

export default UsernameForm;
