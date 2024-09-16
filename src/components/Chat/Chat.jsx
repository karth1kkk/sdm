import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", from: "bot" },
    { text: "I'm looking for information about your services.", from: "user" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, from: "user" }]);
      setNewMessage(""); // Clear input field after sending
      // Simulate a bot reply
      setTimeout(() => {
        setMessages([...messages, { text: newMessage, from: "user" }, { text: "Thank you for reaching out. I'll get back to you shortly.", from: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.from}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
