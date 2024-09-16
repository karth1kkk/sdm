// AccountManagementPage.jsx
import React, { useState } from 'react';
import './account.css'; // Ensure this file is updated

// mockUserData.js
export const userProfile = {
    username: "john_doe",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St, Springfield",
  };
  

const Account = () => {
  const [profile, setProfile] = useState(userProfile);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle password change logic here
    alert('Password changed successfully!');
  };

  return (
    <div className="account-management-page">
      <h1>Account Management</h1>

      <div className="account-sections">
        <div className="profile-section">
          <h2>Profile Information</h2>
          <form className="profile-form">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
              />
            </label>
            <button type="submit">Update Profile</button>
          </form>
        </div>

        <div className="password-section">
          <h2>Change Password</h2>
          <form className="password-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              New Password:
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <button type="button" onClick={handlePasswordChange}>
              Change Password
            </button>
          </form>
        </div>
      </div>

      <div className="payment-method-section">
        <h2>Payment Methods</h2>
        <form className="payment-form">
          <label>
            Credit Card Number:
            <input type="text" placeholder="1234 5678 9012 3456" />
          </label>
          <label>
            Expiration Date:
            <input type="text" placeholder="MM/YY" />
          </label>
          <label>
            CVV:
            <input type="text" placeholder="123" />
          </label>
          <button type="submit">Update Payment Method</button>
        </form>
      </div>

      <div className="settings-section">
        <h2>Account Settings</h2>
        <p>Settings options will be here.</p>
        {/* Add additional settings options as needed */}
      </div>
    </div>
  );
};

export default Account;
