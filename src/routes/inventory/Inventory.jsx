import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./inventory.scss";

const Inventory = () => {
  return (
    <div className="inventory">
      <Sidebar />
      <div className="inventoryContainer">
        <Navbar />
      </div>
    </div>
  )
}

export default Inventory