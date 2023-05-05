import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, Box } from "@material-ui/core";
import SideWindowOptions from "../sideWindow/SideWindowOptions";
import { BonsCommandContext } from "../../context/bonCommandeContext";
import QuickAccess from "../quick-accesses/QuickAccess";
import { InvoiceListing } from "../invoice-listing/InvoiceListing";
import FormStepper from "../invoices-popup/InvoicesPopup";
import "./invoices.scss";

const Invoices = ({ type }) => {
  const { bonsCommand, setBonsCommandByMonth, setFetchAll } =
    useContext(BonsCommandContext);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [tableData, setTableData] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    if (type === "bonsCommande") {
      if (selectedMonth) {
        setBonsCommandByMonth(selectedMonth);
        setTableData(bonsCommand);
        setFetchAll(false);
        console.log("fetchedByMont");
      } else {
        setFetchAll(true);
        setTableData(bonsCommand);
        console.log("fetch All");
      }
    }
  }, [type, selectedMonth]);

  useEffect(() => {
    console.log(selectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    console.log(bonsCommand);
  }, [bonsCommand]);

  const handleSelectedMonth = (id) => {
    setSelectedMonth(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="componentsContainer">
      {type === "bonsCommande" && (
        <>
          <div onClick={handleOpen}>
            <QuickAccess type="ajouter-bons" />
          </div>
          <SideWindowOptions
            type={type}
            handleSelectedMonth={handleSelectedMonth}
          />
          {tableData !== "" && <InvoiceListing type={type} />}
          <Modal
            open={open}
            onClose={handleClose}
            BackdropProps={{
              style: { backdropFilter: "blur(2px)" },
            }}
          >
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 24,
                borderRadius: 4,
                p: 2,
                minWidth: 300,
                maxWidth: 500,
                textAlign: "center",
                margin: "auto",
                marginTop: "20vh",
                maxHeight: "90vh",
                overflowY: "auto"                
              }}
              >
              <FormStepper  
                handleClose={handleClose}
                type={"ajouter-bons"}
              />
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Invoices;
