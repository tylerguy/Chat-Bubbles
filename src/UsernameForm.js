import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UsernameForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/chat/${username}`);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username-input">Username:</label>
      <input
        id="username-input"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      <button type="submit">Join Chat</button>
    </form>
  );
}

export default UsernameForm;
