import React, { useState, useEffect } from "react";
import tmi from "tmi.js";
import config from "./config.json";

function App() {
  const [messages, setMessages] = useState([]);
  const [channel] = useState(config.channel);

  const client = new tmi.Client({
    channels: [channel],
  });

  useEffect(() => {
    const messageHandler = (channel, tags, message, self) => {
      let truncatedMessage = message.slice(0, 30);
      if (message.length > 30) {
        truncatedMessage += "...";
      }
      setMessages((prevMessages) => [
        ...prevMessages.slice(-2),
        `${tags["display-name"]}: ${truncatedMessage}`,
      ]);
      setTimeout(() => {
        setMessages((prevMessages) => prevMessages.slice(1));
      }, 5000);
    };

    client.connect();

    client.on("message", messageHandler);

    return () => {
      client.off("message", messageHandler);
    };
  });

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} id={`message-${index}`}>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
