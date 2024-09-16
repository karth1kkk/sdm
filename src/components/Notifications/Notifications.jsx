import React from "react";
import "./notifications.css";

const notifications = [
  { id: 1, title: "New Message", content: "You have a new message from John Doe.", timestamp: "2 hours ago" },
  { id: 2, title: "System Update", content: "Your system has been updated to the latest version.", timestamp: "1 day ago" },
  { id: 3, title: "Appointment Reminder", content: "Your appointment is scheduled for tomorrow at 3 PM.", timestamp: "3 days ago" },
];

const Notifications = () => {
  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h2>Notifications</h2>
      </div>
      <div className="notifications-list">
        {notifications.map(notification => (
          <div className="notification-item" key={notification.id}>
            <div className="notification-title">{notification.title}</div>
            <div className="notification-content">{notification.content}</div>
            <div className="notification-timestamp">{notification.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
