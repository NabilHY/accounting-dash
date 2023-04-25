import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./accounting.scss";

const Accounting = () => {
  return (
    <div className="accounting">
      <Sidebar />
      <div className="div accountingContainer">
        <Navbar />
      </div>
    </div>
  )
}

export default Accounting