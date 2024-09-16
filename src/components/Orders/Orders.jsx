// OrderTrackingPage.jsx
import React from 'react';
import './order.css'; // Create a CSS file for styling

// mockData.js
export const orders = [
    {
      id: "ORD123456",
      customer: "John Doe",
      status: "In Transit",
      estimatedDelivery: "2024-09-20",
      trackingLink: "https://courier-service.com/track/ORD123456",
    },
    {
      id: "ORD123457",
      customer: "Jane Smith",
      status: "Delivered",
      estimatedDelivery: "2024-09-15",
      trackingLink: "https://courier-service.com/track/ORD123457",
    },
    {
      id: "ORD123458",
      customer: "Michael Johnson",
      status: "Pending",
      estimatedDelivery: "2024-09-25",
      trackingLink: "https://courier-service.com/track/ORD123458",
    },
  ];
  
const Orders = () => {
  return (
    <div className="order-tracking-page">
      <h1>Order Tracking</h1>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <h2>Order ID: {order.id}</h2>
            <p><strong>Customer:</strong> {order.customer}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
            <a href={order.trackingLink} target="_blank" rel="noopener noreferrer">
              Track Your Order
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
