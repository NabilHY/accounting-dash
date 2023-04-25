import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./orders.scss";

const Orders = () => {
  return (
    <div className="orders">
      <Sidebar />
      <div className="ordersContainer">
        <Navbar />
      </div>
    </div>
  )
}

export default Orders;