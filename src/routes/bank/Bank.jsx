import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import QuickAccess from '../../components/quick-accesses/QuickAccess';
import InfoBar from '../../components/info-bar/InfoBar';
import AccountingTable from '../../components/accounting-table/AccountingTable';
import { data } from '../../mocks/bank/bankAccessMocks';
import { chiffres, headers, years } from '../../mocks/bank/bankTable';
import "./bank.scss"

const Bank = () => {
  return (
    <div className="bank">
      <Sidebar />
      <div className="bankContainer">
        <Navbar />
        <div className="quick-access-container">
          <QuickAccess type="portefuille" />
          <QuickAccess type="cloture" />
          <QuickAccess type="entrant" />
          <QuickAccess type="sortant" />
          <QuickAccess type="edition" />
        </div>
        <InfoBar data={data} />
        <AccountingTable data={chiffres} headers={headers} years={years} />
      </div>
    </div>
  )
}

export default Bank