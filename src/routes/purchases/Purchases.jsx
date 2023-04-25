import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import QuickAccess from '../../components/quick-accesses/QuickAccess';
import InfoBar from '../../components/info-bar/InfoBar';
import AccountingTable from '../../components/accounting-table/AccountingTable';
import data from '../../mocks/achat/achat-mock';
import { chiffres, headers, years } from '../../mocks/achat/table-achat';
import { graphData } from '../../mocks/achat/mock-achat-graph';
import "./purchases.scss";
import Chart from '../../components/graph/Graph';

const Expenses = () => {
  return (
    <div className="purchases">
      <Sidebar />
      <div className="purchasesContainer">
        <Navbar />
        <div className="quick-access-container">
          <QuickAccess type="bons-de-commande" />
          <QuickAccess type="fournisseurs" />
          <QuickAccess type="article" />
          <QuickAccess type="reception" />
          <QuickAccess type="factures" />
          <QuickAccess type="paiements" />
          <QuickAccess type="edition" />
        </div>
        <InfoBar data={data} />
        <div className="chart-and-table-container">
          <Chart className="chart-component" data={graphData} />
          <AccountingTable data={chiffres} headers={headers} years={years} />
        </div>
      </div>
    </div>
  )
}
export default Expenses