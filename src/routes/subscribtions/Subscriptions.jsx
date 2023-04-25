import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./subscriptions.scss";
import QuickAccess from '../../components/quick-accesses/QuickAccess';
import Chart from '../../components/graph/Graph';
import { data } from '../../mocks/crm/crm-mock';
import InfoBar from '../../components/info-bar/InfoBar';
import { graphData } from '../../mocks/crm/chart-data';

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <Sidebar />
      <div className="subscriptionsContainer">
        <Navbar />
        <div className="top-container">
          <QuickAccess type="contacts" />
          <QuickAccess type="clients" />
          <InfoBar data={data} />
        </div>
        <Chart data={graphData} /> 
      </div>
    </div>
  )
}

export default Subscriptions