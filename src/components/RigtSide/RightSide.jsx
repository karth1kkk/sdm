import React from "react";
import { useLocation } from 'react-router-dom';
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define the paths where CustomerReview should be hidden
  const hideCustomerReviewPaths = ['/user', '/notifications', '/orders', '/chat','/account'];

  return (
    <div className="RightSide">
      <div>
        <h3>Chat</h3>
        <Updates />
      </div>
      {/* Conditionally render CustomerReview based on the current path */}
      {!hideCustomerReviewPaths.includes(currentPath) && (
        <div>
          <h3>Customer Review</h3>
          <CustomerReview />
        </div>
      )}
    </div>
  );
};

export default RightSide;

