import React, { useState, useContext, useEffect } from "react";
import { FournisseursContext } from "../../context/fournisseursContext";
import SideWindowOptions from "../sideWindow/SideWindowOptions";
import { ExampleModal } from "../popup/PopUp";
import List from "../table/Table";
import "./fournisseurs.scss";

const Fournisseurs = () => {
  const [activeData, setActiveData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const { fournisseurs } = useContext(FournisseursContext);

  const headers = [
    "id",
    "code_fournisseur",
    "fournisseur",
    "ICE",
    "IF",
    "RC",
    "Adresse",
    "email",
    "Telephone",
    "created_at",
    "updated_at",
  ];

  useEffect(() => {
    setActiveData(fournisseurs);
    setIsLoading(false);
  }, [fournisseurs]);

  return (
    <div className="componentsContainer">
      <SideWindowOptions type="fournisseurs" handleModal={handleClick} />
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <List data={activeData} heade={headers} prop={true} />
      )}
      {showModal && (
        <ExampleModal
          show={true}
          handleClose={handleClose}
          type={"fournisseur"}
        />
      )}
    </div>
  );
};

export default Fournisseurs;
