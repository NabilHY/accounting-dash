import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TodayIcon from '@mui/icons-material/Today';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import InventoryIcon from '@mui/icons-material/Inventory';
import BookIcon from '@mui/icons-material/Book';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import logo from '../../assets/logo.png';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src={logo} alt="logdistdunord-logo" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Tableau de bord</span>
          </li>
        </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Employés</span>
            </li>
          </Link>
          {/* <Link to="/inventaire" style={{ textDecoration: "none" }}>
            <li>
              <InventoryIcon className="icon" />
              <span>Inventaire</span>
            </li>
          </Link> */}
            <Link to="/depense" style={{ textDecoration: "none" }}>
              <li>
                <CurrencyExchangeIcon className="icon" />
                <span>Dépenses</span>
              </li>
            </Link>
            <Link to="/banque-caisse" style={{ textDecoration: "none" }}>
              <li>
                <AccountBalanceIcon className="icon" />
                <span>Banque/Caisse</span>
              </li>
            </Link>
            {/* <Link to="/comptabilite" style={{ textDecoration: "none" }}>
              <li>
                <BookIcon className="icon" />
                <span>Comptabilite</span>
              </li>
            </Link> */}
          <Link to="/achat" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingBasketIcon className="icon" />
              <span>Achats</span>
            </li> 
          </Link>
          <Link to="/vente" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingCartIcon className="icon" />
              <span>Vente</span>
            </li>
          </Link>
          <Link to="/crm" style={{ textDecoration: "none" }}>
            <li>
              <SubscriptionsIcon className="icon" />
              <span>CRM</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <StoreIcon className="icon" />
                <span>Produits</span>
              </li>
          </Link>
          {/* <Link to="/ordres" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Ordres</span>
            </li>
          </Link> */}
          {/* <Link to="/distribution" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Distribution</span>
            </li>
          </Link> */}
          {/* <Link to="/stats" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Statistiques</span>
            </li>
          </Link> */}
          {/* <Link to="/agenda" style={{ textDecoration: "none" }}>
            <li>
                <TodayIcon className="icon" />
                <span>Agenda</span>
            </li>
          </Link> */}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
