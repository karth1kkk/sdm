import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Customer from '../src/components/pages/Customer';
import Employee from '../src/components/pages/Employee';
import Analytics from './components/pages/Analytics';
import Products from './components/pages/Products';
import User from './components/pages/User';
import Chat from './components/Chat/Chat';
import Notifications from './components/Notifications/Notifications';
import Orders from './components/Orders/Orders';
import Account from './components/Account/Account';

function App() {
  const location = useLocation(); // Get the current route location
  let bgColor 

      // Set the linear gradient background for specific paths
      const gradientBackground = `linear-gradient(
        106.37deg,
        #add8e6 29.63%, /* Light Blue */
        #87ceeb 51.55%, /* Sky Blue */
        #4682b4 90.85%  /* Steel Blue */
      )`;
      
  // Change background color for specific paths
  if (location.pathname === "/user" || 
      location.pathname === "/notifications" || 
      location.pathname === "/chat" || 
      location.pathname === "/orders" || 
      location.pathname === "/account") {
    bgColor = gradientBackground; // Set a different background color for these pages
  }

  return (
    <div className="App" style={{ background: bgColor }}>
      <div className="AppGlass">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainDash />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<User />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        {/* Conditionally render RightSide if the path is not "/user" */}
        {location.pathname !== "/user" && <RightSide />}
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
