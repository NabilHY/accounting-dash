import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./stats.scss";

const Stats = () => {
  return (
    <div className="stats">
      <Sidebar />
      <div className="statsContainer">
        <Navbar />
      </div>
    </div>
  )
}
export default Stats