import React, { useState, useEffect, useContext } from "react";
import { FournisseursContext } from "../../context/fournisseursContext";
import { ProductsContext } from "../../context/productsContext";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  Box,
  Checkbox,
  Modal,
  Typography,
} from "@material-ui/core";
import "./invoices-popup.scss";

const FormStepper = ({ handleClose, type }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [productList, setProductList] = useState([]);
  const [productName, setProductName] = useState("");
  const [openArticles, setOpenArticles] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [checked, setChecked] = useState(false);
  const { fournisseursNamesAndIds } = useContext(FournisseursContext);
  const { productsSelect } = useContext(ProductsContext);
  const [firstFormFields, setFirstFromFields] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectMenuKey1, setSelectMenuKey1] = useState([]);
  const [selectMenuKey2, setSelectMenuKey2] = useState([]);
  const [selectMenus, setSelectMenus] = useState({});
  const [secondFormFields, setSecondFormFields] = useState([]);
  const [formJson, setFormJson] = useState("");
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    switch (type) {
      case "ajouter-bons":
        setSteps([
          "Inserez Les Infos Du Bons",
          "Ajouter Les Artices",
          "Confirmation Du Bons De Commande",
        ]);
        setFirstFromFields([
          {
            label: "Numero du bon",
            name: "Numero_bonCommande",
            type: "text",
          },
          {
            label: "Commentaire",
            name: "Commentaire",
            type: "text",
          },
          {
            label: "Confirme",
            name: "Confirme",
            type: "checkbox",
          },
        ]);
        setSecondFormFields([
          {
            label: "Quantite",
            name: "Quantity",
            type: "number",
          },
        ]);
        setSelectMenuKey1("fournisseurs");
        setSelectMenuKey2("articles");
        setSelectMenus([
          {
            fournisseurs: fournisseursNamesAndIds,
          },
          {
            articles: productsSelect,
          },
        ]);
        break;
      default:
        break;
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormJson({ ...formJson, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormJson({
      ...formJson,
      [name]: checked,
    });
  };



  const handleOpenArticles = () => {
    setOpenArticles(true);
  };

  const handleCloseArticles = () => {
    setOpenArticles(false);
  };

  useEffect(() => {
    console.log(formJson);
  }, [formJson]);

  function renderFormControls(fields) {
    return fields.map((field) => {
      switch (field.type) {
        case "text":
          return (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              alue={formJson[field.name] || ""}
              onChange={handleChange}
              fullWidth
            />
          );
        case "checkbox":
          return (
            <div className="checkBox">
              <p>Confirme</p>
              <Checkbox
                key={field.name}
                label={field.label}
                name={field.name}
                onChange={handleCheckboxChange}
              />
            </div>
          );
        case "number":
          return (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              onChange={handleChange}
              type="number"
              required
              fullWidth
              inputProps={{
                min: 1,
              }}
            />
          );
        default:
          return null;
      }
    });
  }

  useEffect(() => {
    console.log(selectMenus);
  }, [selectMenus]);

  const renderFormSelect = (selectType) => {
    if (!Array.isArray(selectMenus)) {
      return [];
    }
    const selectMenu = selectMenus.find((obj) =>
      obj.hasOwnProperty(selectType)
    );
    if (!selectMenu) {
      return [];
    }
    const selects = selectMenu[selectType];
    return selects.map((item) => (
      <MenuItem key={item.id} value={item.id}>
        {item.name}
      </MenuItem>
    ));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAddProduct = () => {
    setProductList([...productList, { productName, quantity }]);
    setProductName("");
    setQuantity("");
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
              }}
            >
              {renderFormControls(firstFormFields)}
              <Select
                label="Quantity"
                value={quantity}
                id="select"
                name="fournisseur_id"
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
                variant="outlined"
                sx={{ mb: 2 }}
                style={{ width: "100%" }}
              >
                <p>Fournisseurs</p>
                {renderFormSelect(selectMenuKey1)};
              </Select>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <Modal
              open={openArticles}
              onClose={handleCloseArticles}
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
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Selectionnez le produit et sa quantite
                </Typography>
                <Select
                  label="Article"
                  value=""
                  id="select"
                  name="article_id"
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  sx={{ mb: 2 }}
                  style={{ width: "100%" }}
                >
                  {renderFormSelect(selectMenuKey2)};
                </Select>
                {renderFormControls(secondFormFields)}
              </Box>
              <Button variant="outlined" onClick={handleClose} sx={{ mr: 1 }}>
                Annuler
              </Button>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
              >
                Enregistrer
              </Button>
            </Modal>
            <Button onClick={handleOpenArticles}>Ajouter Les Articles</Button>
          </>
        );
      case 2:
        return (
          <>
            <div>
              Detailes Du Bons:
              {productList.map((product, index) => (
                <div key={index}>
                  {product.productName} - {product.quantity}
                </div>
              ))}
            </div>
            {/* <Button onClick={handleClose}>Cancel</Button> */}
            {/* <Button variant="contained" color="primary" onClick={handleClose}>
              Submit
            </Button> */}
          </>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Retourne
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              activeStep === steps.length - 1 ? handleClose() : handleNext();
            }}
          >
            {activeStep === steps.length - 1 ? "Ajouter" : "Suivant"}
          </Button>
        </Box>
      </div>
    </>
  );
};

export default FormStepper;
