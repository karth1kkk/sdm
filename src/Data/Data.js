// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUser
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: "/",
  },
  {
    icon: UilClipboardAlt,
    heading: "Employees",
    path: '/employee'
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    path: '/customer'
  },
  {
    icon: UilPackage,
    heading: 'Products',
    path: '/products'
  },
  {
    icon: UilChart,
    heading: 'Analytics',
    path: '/analytics'
  },
];


// Sidebar Data
export const SidebarData2 = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: "/user",
  },
  {
    icon: UilClipboardAlt,
    heading: "Chat",
    path: '/chat'
  },
  {
    icon: UilUsersAlt,
    heading: "Notifications",
    path: '/notifications'
  },
  {
    icon: UilPackage,
    heading: 'Orders',
    path: '/orders'
  },
  {
    icon: UilUser,
    heading: 'Account',
    path: '/account'
  }

];
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #004d40 0%, #00796b 100%)", // Updated to dark turquoise gradient
      boxShadow: "0px 10px 20px 0px #003d34",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #004d40 0%, #00796b 100%)", // Updated to dark turquoise gradient
      boxShadow: "0px 10px 20px 0px #003d34",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #004d40 0%, #00796b 100%)", // Updated to dark turquoise gradient
      boxShadow: "0px 10px 20px 0px #003d34",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


export const cardsData2 = [
  {
    title: "Orders",
    color: {
      backGround: "linear-gradient(180deg, #004d40 0%, #00796b 100%)", // Updated to dark turquoise gradient
      boxShadow: "0px 10px 20px 0px #003d34",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Orders",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Payments",
    color: {
      backGround: "linear-gradient(180deg, #004d40 0%, #00796b 100%)", // Updated to dark turquoise gradient
      boxShadow: "0px 10px 20px 0px #003d34",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Total Payments",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #004d40 0%, #00796b 100%)", // Updated to dark turquoise gradient
      boxShadow: "0px 10px 20px 0px #003d34",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "Order has been received.Thanks",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "I have received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Tony",
    noti: "My order is not here",
    time: "2 hours ago",
  },
];
