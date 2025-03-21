import React, { useState, useEffect, useRef } from 'react';
import '../styling/Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Jimmy', content: 'Hi, is the apartment still available?', timestamp: '10:05 AM' },
    { id: 2, sender: 'Gilmore', content: 'Can we schedule a visit for tomorrow?', timestamp: '10:07 AM' },
    { id: 3, sender: 'Alice', content: 'I’d like to know more about the property.', timestamp: '10:10 AM' },
    { id: 4, sender: 'You', content: 'Yes, it is still available!', timestamp: '10:12 AM' },
    { id: 5, sender: 'Mark', content: 'What’s the rental price?', timestamp: '10:15 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="messages-page">
      <h1>Messages</h1>
      <div className="chat-box">
        <ul>
          {messages.map((msg) => (
            <li key={msg.id} className={msg.sender === 'You' ? 'sent' : 'received'}>
              <div className="chat-bubble">
                <strong>{msg.sender}:</strong> {msg.content}
                <span className="timestamp">{msg.timestamp}</span>
              </div>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Press Enter to send
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
