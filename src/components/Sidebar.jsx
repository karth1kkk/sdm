import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData, SidebarData2 } from "../Data/Data"; // Import SidebarData2
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;


    // Determine which sidebar data to use based on the current path
    let sidebarData;
    if (currentPath === '/user') {
      sidebarData = SidebarData2;
    } else if (currentPath === '/chat') {
      sidebarData = SidebarData2;
    } else if (currentPath === '/notifications') {
      sidebarData = SidebarData2;
    } else if (currentPath === '/orders') {
      sidebarData = SidebarData2; // Ensure you have this data set
    } 
    else if (currentPath === '/account') {
      sidebarData = SidebarData2;
    }else {
      sidebarData = SidebarData;
    }

  const handleClick = (index, path) => {
    setSelected(index);
    navigate(path); // Navigate to the provided path
  };

  const handleSignOutClick = () => {
    // Check if the current path is /user
    if (location.pathname === '/user') {
      navigate('/'); // Navigate to home if currently on /user
    } else {
      navigate('/user'); // Navigate to /user if currently on any other page
    }
  };

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  return (
    <>
      <div
        className="bars"
        style={{ left: expanded ? '60%' : '5%' }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : 'true'}
      >
        {/* Logo */}
        <div className="logo">
          <img style={{ width: '20px', height: '20px' }} src={Logo} alt="logo" />
          <span>
            On <span>The</span> Go
          </span>
        </div>

        <div className="menu">
          {sidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleClick(index, item.path)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}
          {/* Signout Icon */}
          <div className="menuItem" onClick={handleSignOutClick}>
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
