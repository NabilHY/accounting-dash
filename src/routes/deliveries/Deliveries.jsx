import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SideWindowOptions from "../../components/sideWindow/SideWindowOptions";
// import DataTable from "../../components/dataTable/DataTable";
import QuickAccess from "../../components/quick-accesses/QuickAccess";
import "./deliveries.scss";

const Deliveries = () => {
  const [selectedQuickAccessType, setSelectedQuickAccessType] = useState(null);

  useEffect(() => {
    console.log(`selectedQuickAccessType: ${selectedQuickAccessType}`);
  }, [selectedQuickAccessType]);

  const handleQuickAccessClick = (type) => {
    setSelectedQuickAccessType(type);
    console.log(`type: ${type}`);
    console.log(`selectedQuickAccessType: ${selectedQuickAccessType}`);
  };

  return (
    <div className="deliveries">
      <Sidebar />
      <div className="deliveriesContainer">
        <Navbar />
        <div className="container">
          <div className="quick-access-container">
            <div onClick={() => handleQuickAccessClick("distribution")}>
              <QuickAccess type="distribution" />
            </div>
            <div onClick={() => handleQuickAccessClick("article")}>
              <QuickAccess type="article" />
            </div>
            <div onClick={() => handleQuickAccessClick("vendeur")}>
              <QuickAccess type="vendeur" />
            </div>
            <div onClick={() => handleQuickAccessClick("secteurs")}>
              <QuickAccess type="secteurs" />
            </div>
          </div>
          <div>
            {
              selectedQuickAccessType ? (
                <div>
                    <SideWindowOptions type={selectedQuickAccessType} />
                </div>
              ) : (
                <div />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;