import React, { useState } from 'react';
import '../styles/Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Jimmy', content: 'Hi, is the apartment still available?' },
    { id: 2, sender: 'Gilmore', content: 'Can we schedule a visit for tomorrow?' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage.trim(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="messages-page">
      <h1>Messages</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.sender}:</strong> {msg.content}
          </li>
        ))}
      </ul>
      <textarea
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Messages;
