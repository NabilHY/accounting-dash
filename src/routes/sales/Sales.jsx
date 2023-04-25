import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import QuickAccess from '../../components/quick-accesses/QuickAccess';
import Navbar from '../../components/navbar/Navbar';
import AccountingTable from '../../components/accounting-table/AccountingTable';
import Chart from '../../components/graph/Graph';
import { data } from "../../mocks/vente/vente-mock";
import { graphData } from '../../mocks/vente/mock-vente-graph'; 
import { chiffres, headers, years } from "../../mocks/vente/table-vente";
import "./sales.scss";
import InfoBar from '../../components/info-bar/InfoBar';

const Sales = () => {
  return (
    <div className="sales">
      <Sidebar />
      <div className="salesContainer">
        <Navbar />
        <div className="quick-access-container">
          <QuickAccess type="clients" />
          <QuickAccess type="article" />
          <QuickAccess type="bons-de-livraison" />
          <QuickAccess type="factures" />
          <QuickAccess type="paiements" />
          <QuickAccess type="edition" />
        </div>
        <InfoBar data={data} />
        <div className="chart-and-table-container">
          <Chart data={ graphData } />
          <AccountingTable data={chiffres} headers={headers} years={years} />
        </div>
      </div>
    </div>
  )
}

export default Sales