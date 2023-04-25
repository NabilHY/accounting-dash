import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import AccountingTable from '../../components/accounting-table/AccountingTable';
import Pie from '../../components/pie/Pie';
import { data, headers, years } from '../../mocks/expenses/table-depenses.js';
import QuickAccess from '../../components/quick-accesses/QuickAccess';
import "./expenses.scss";

const Expenses = () => {
  return (
    <div className="expenses">
      <Sidebar />
      <div className="expensesContainer">
        <Navbar />
        <div className="quick-access-container">
          <QuickAccess type="note-de-frais" />
          <QuickAccess type="nature-des-depenses" />
          <QuickAccess type="paiements" />
          <QuickAccess type="edition" />
        </div>
        <div className="pie-container">
          <AccountingTable data={data} years={years} headers={headers} />
          <Pie />
        </div>
      </div>
    </div>
  )
}
export default Expenses