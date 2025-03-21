import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import '../styling/Profile.css';

const Profile = () => {
  const [profile] = useState({
    name: 'Michael Scott',
    email: 'MichaelScott@gmail.com',
    phone: '(519) 456-7235',
    address: '68 Clifton Hill, Niagara Falls, ON',
    bio: 'Passionate about real estate investments and rental properties.',
    profileCompletion: 100,
  });

  return (
    <div className="profile-page">
      <div className="profile-info">
        <img
          src="https://via.placeholder.com/150/FFD700/FFFFFF?text=MS"
          alt="Profile"
        />
        <h2><FaUser /> {profile.name}</h2>
        <p><FaEnvelope /> <strong>Email:</strong> {profile.email}</p>
        <p><FaPhone /> <strong>Phone:</strong> {profile.phone}</p>
        <p><FaMapMarkerAlt /> <strong>Address:</strong> {profile.address}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>

        <div className="profile-completion">
          <span>Profile Completion: {profile.profileCompletion}%</span>
          <div className="completion-bar">
            <div
              className="completion-fill"
              style={{ width: `${profile.profileCompletion}%` }}
            />
          </div>
        </div>

        <button>Edit Profile</button>
      </div>
    </div>
  );
  
};

export default Profile;
