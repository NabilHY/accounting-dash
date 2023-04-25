import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import LinksWidget from "../../components/links-widget/LinksWidget";
import { rows, headers } from "../../mocks/achat/transaction-table";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar className='sidebar' />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="cheque-retard" />
          <Widget type="non-cloture" />
          <Widget type="achat" />
          <Widget type="retard" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="6 derniers mois (commandes)" aspect={2 / 1} />
        </div>
        <div className="widgets">
          <LinksWidget type="achats" />
          <Widget type="inventaire" className="widget" />
          <Widget type="depense" className="widget" />
        </div>
        <div className="widgets">
          <LinksWidget type="vente" />
          <LinksWidget type="tresorerie" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Dernières transactions</div>
          <Table heade={headers} data={rows}  /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
