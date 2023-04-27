import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Inventory from "./routes/inventory/Inventory";
import Expenses from "./routes/expenses/Expenses";
import Bank from "./routes/bank/Bank";
import Purchases from "./routes/purchases/Purchases";
import Accounting from "./routes/accounting/Accounting";
import Sales from "./routes/sales/Sales";
import Subscribtions from "./routes/subscribtions/Subscriptions";
import Products from "./routes/products/Product";
import Orders from "./routes/orders/Orders";
import Deliveries from "./routes/deliveries/Deliveries";
import Stats from "./routes/stats/Stats";
import Agenda from "./routes/agenda/Agenda";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import "./style/dark.scss";


function App() {

  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  } 

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
               <RequireAuth>
                 <Home /> 
               </RequireAuth>
              } />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                 <RequireAuth>
                   <List />
                  </RequireAuth>
                } />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                } />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Ajouter un nouvel utilisateur" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route index element={
               <RequireAuth>
                 <Products />
               </RequireAuth>
              } />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Ajouter un nouveau produit" />
                    </RequireAuth>
                }
              />
            </Route>
            <Route path="inventaire" element={<Inventory />} />
            <Route path="depense" element={<Expenses />} />
            <Route path="banque-caisse" element={<Bank />} />
            <Route path="achat" element={<Purchases />} />
            <Route path="comptabilite" element={<Accounting />} />
            <Route path="vente" element={<Sales />} /> 
            <Route path="crm" element={<Subscribtions />} /> 
            <Route path="products" element={<Products />} />
            <Route path="ordres" element={<Orders />} />
            <Route path="distribution" element={<Deliveries />} />
            <Route path="stats" element={<Stats />} />
            <Route path="agenda" element={<Agenda />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
