import React from "react";
import Cards from "../Cards2/Cards2";
import Table from "../Table2/Table2";
import "./user.css";
import RightSide from "../RigtSide/RightSide";
const User = () => {
  return (
    <div className="User">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default User;
