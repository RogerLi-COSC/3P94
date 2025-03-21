import React from "react";
import "../styling/Messages.css";

const conversations = [
  { id: 1, name: "Lebron James", message: "Sent just now.", time: "4s", avatar: "https://via.placeholder.com/50", unread: true },
  { id: 2, name: "James Bond", message: "Are you available tomorrow?", time: "37s", avatar: "https://via.placeholder.com/50" },
  { id: 3, name: "Gilmore Thomas", message: "Thanks!", time: "1m", avatar: "https://via.placeholder.com/50" },
  { id: 4, name: "Chris Paul", message: "Sent 1m ago.", time: "5m", avatar: "https://via.placeholder.com/50" },
  { id: 5, name: "Operah Winfree", message: "Okay!", time: "14m", avatar: "https://via.placeholder.com/50", unread: true },
  { id: 6, name: "Michelle Obama", message: "Liked a message.", time: "23m", avatar: "https://via.placeholder.com/50" },
  { id: 7, name: "Thomas Edison", message: "I loved the house.", time: "1h", avatar: "https://via.placeholder.com/50" },
  { id: 8, name: "Tim Bones", message: "Meeting at 3PM confirmed.", time: "3h", avatar: "https://via.placeholder.com/50" },
  { id: 9, name: "Kanye West", message: "Sent you an attachment.", time: "56m", avatar: "https://via.placeholder.com/50", unread: true },
  { id: 10, name: "Indiana Jones", message: "Call me when you're free.", time: "2m", avatar: "https://via.placeholder.com/50" },
  { id: 11, name: "Nolan Winter", message: "Sent 6h ago.", time: "2h", avatar: "https://via.placeholder.com/50" },
  { id: 12, name: "Kevin He", message: "Thanks for your help!", time: "4d", avatar: "https://via.placeholder.com/50" },
];

const MessagesList = () => {
  return (
    <div className="messages-list">
      {/* Header */}
      <div className="messages-header">
        <h2>modeandkids</h2>
        <button className="add-button">+</button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      {/* Messages */}
      <ul className="messages-container">
        {conversations.map((chat) => (
          <li key={chat.id} className="message-item">
            <img src={chat.avatar} alt={chat.name} className="avatar" />
            <div className="message-info">
              <div className="name-time">
                <span className="name">{chat.name}</span>
                {chat.time && <span className="time">{chat.time}</span>}
              </div>
              <div className="message-preview">
                {chat.message}
                {chat.unread && <span className="unread-dot"></span>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
