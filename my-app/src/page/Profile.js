import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Michael Scott',
    email: 'MichaelScott@gmail.com',
    phone: '(519) 456-7235',
    address: '68 Clifton Hill, Niagara Falls, ON',
    bio: 'Passionate about real estate investments and rental properties.',
    profileCompletion: 80, // Percentage completion
  });

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <img
          src="https://via.placeholder.com/150/FFD700/FFFFFF?text=Profile+Pic"
          alt="Profile"
        />
        <h2>{profile.name}</h2>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
        
        {/* Profile completion bar */}
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
