import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import QuickAccess from '../../components/quick-accesses/QuickAccess';
import InfoBar from '../../components/info-bar/InfoBar';
import AccountingTable from '../../components/accounting-table/AccountingTable';
import data from '../../mocks/achat/achat-mock';
import { chiffres, headers, years } from '../../mocks/achat/table-achat';
import { graphData } from '../../mocks/achat/mock-achat-graph';
import { fetchProducts } from "../../api/products";
import Fournisseurs from '../../components/fournisseurs/Fournisseurs';
import Chart from '../../components/graph/Graph';
import Products from '../products/Product';
import List from "../../components/table/Table";
import Invoices from "../../components/invoices/Invoices";
import "./purchases.scss";


const Articles = () => {

  const [isLoading, setIsLoading] = useState(true);

  const articleHeaders = [
    "id",
    "article_libelle",
    "reference",
    "prix_unitaire",
    "prix_public",
    "client_Fedele",
    "demi_grossiste",
    "unite",
    "category_id",
    "created_at",
  ];

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setActiveData(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const [activeData, setActiveData] = useState('');

  return (
      <List data={activeData} heade={articleHeaders} prop={true} />
  )
}


const ChartAndTableContainer = () => {
  return (
    <div className="chart-and-table-container">
      <Chart className="chart-component" data={graphData} />
      <AccountingTable data={chiffres} headers={headers} years={years} />
    </div>
  )
}

const Expenses = () => {

  const [componentToRender, setComponentToRender] = useState('ChartAndTableContainer');

  const handleClickFournisseur = () => {
    setComponentToRender('Fournisseur')
  }

  const handleClickArticle = () => {
    setComponentToRender('articles')
  }

  const handleClickInvoice = () => {
    setComponentToRender('invoices')
  }

  return (
    <div className="purchases">
      <Sidebar />
      <div className="purchasesContainer">
        <Navbar />
        <div className="quick-access-container">
          <div onClick={handleClickInvoice}>
            <QuickAccess type="bons-de-commande" />
          </div>
          <div onClick={handleClickFournisseur}>
            <QuickAccess type="fournisseurs" />
          </div>
          <div onClick={handleClickArticle}>
            <QuickAccess type="article" />
          </div>
          <QuickAccess type="reception" />
          <QuickAccess type="factures" />
          <QuickAccess type="paiements" />
          <QuickAccess type="edition" />
        </div>
        <InfoBar data={data} />
        <div>
          {
            componentToRender === 'ChartAndTableContainer' ? <ChartAndTableContainer /> : <div></div>
          }
          {
            componentToRender === 'Fournisseur' ? <Fournisseurs /> : <div></div>
          }
          {
            componentToRender === 'articles' ? <Articles /> : <div></div>
          }
          {
            componentToRender === 'invoices' ? <Invoices type={'bonsCommande'} /> : <div></div>
          }
        </div>
      </div>
    </div>
  )
}
export default Expenses