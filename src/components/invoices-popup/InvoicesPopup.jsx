import React, { useState, useEffect, useContext } from "react";
import { FournisseursContext } from "../../context/fournisseursContext";
import { ProductsContext } from "../../context/productsContext";
import { CategoriesContext } from "../../context/categoriesContext";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import "./invoices-popup.scss";

const FormStepper = ({ handleClose, type }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [productList, setProductList] = useState([]);
  const [productName, setProductName] = useState("");
  const [openArticles, setOpenArticles] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [checked, setChecked] = useState(false);
  const { categories } = useContext(CategoriesContext);
  const { fournisseursNamesAndIds } = useContext(FournisseursContext);
  const { productsSelect } = useContext(ProductsContext);
  const [firstFormFields, setFirstFromFields] = useState([]);
  const [selectMenuKey1, setSelectMenuKey1] = useState([]);
  const [selectMenuKey2, setSelectMenuKey2] = useState([]);
  const [selectMenus, setSelectMenus] = useState({});
  const [secondFormFields, setSecondFormFields] = useState([]);
  const [formJson, setFormJson] = useState("");
  const [steps, setSteps] = useState([]);

  const [articles, setArticles] = useState({ Articles: [] });

  const [singleArticle, setSingleArticle] = useState({});

  const [orderedArticles, setOrderedArticles] = useState([]);

  useEffect(() => {
    setOrderedArticles();
  }, [articles]);

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
          {
            categories: categories,
          },
        ]);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  useEffect(() => {
    console.log(singleArticle);
  }, [singleArticle]);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const totalHT = singleArticle.Quantity * singleArticle.price;
    const totalTVA = totalHT * 0.2;
    const totalTTC = totalHT + totalTVA;

    // Create a copy of the singleArticle object without the article_id property
    const { article_id, ...rest } = singleArticle;

    // Create a new object with the article_id key and the rest of the properties from singleArticle
    const modifiedSingleArticle = {
      article_id: singleArticle.article_idea,
      ...rest,
    };

    const newArticle = {
      ...modifiedSingleArticle,
      Total_HT: totalHT,
      Total_TVA: totalTVA,
      Total_TTC: totalTTC,
    };

    setArticles({ Articles: [...articles.Articles, newArticle] });
    setSingleArticle({});
  };

  function handleArticleInputChange(event) {
    if (!event || !event.target || !event.target.name || !event.target.value) {
      return;
    }

    const { name, value } = event.target;
    const id = parseInt(value.charAt(0));
    const [_, price] = value.split(":");
    const newPrice = Number.parseFloat(price) || 0;

    setSingleArticle((prevArticle) => ({
      ...prevArticle,
      price: newPrice,
      article_idea: id,
      [name]: value,
    }));
  }

  const handleArticleInputChange2 = (event) => {
    let { name, value } = event.target;
    value = parseInt(value);
    setSingleArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
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
              value={formJson[field.name] || ""}
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
              onChange={handleArticleInputChange2}
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

  const renderFormSelect = (selectType, param) => {
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
    if (param) {
      return selects.map((item) => (
        <MenuItem key={item.id} value={`${item.id}:${item.unit_price}`}>
          {item.name}
        </MenuItem>
      ));
    } else {
      return selects.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ));
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmission = async () => {
    const data = { ...articles, ...formJson };
  
    try {
      const response = await fetch('/https://iker.wiicode.tech/api/boncommande/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      // handle success
    } catch (error) {
      console.error(error);
      // handle error
    }
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
            <Button onClick={handleOpenArticles}>Ajouter Les Articles</Button>
            {articles.Articles.length > 0 && (
              <ul>
                {articles.Articles.length > 0 && (
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Article</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Total HT</TableCell>
                          <TableCell>Total TVA</TableCell>
                          <TableCell>Total TTC</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {articles.Articles.map((article) => (
                          <TableRow key={article.article_id}>
                            <TableCell>{article.name}</TableCell>
                            <TableCell>{article.price}</TableCell>
                            <TableCell>{article.Quantity}</TableCell>
                            <TableCell>{article.Total_HT}</TableCell>
                            <TableCell>{article.Total_TVA}</TableCell>
                            <TableCell>{article.Total_TTC}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </ul>
            )}
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
                  maxWidth: 900,
                  textAlign: "center",
                  margin: "auto",
                  maxHeight: "90vh",
                  overflowY: "auto" 
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Selectionnez le produit et sa quantite
                </Typography>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                    handleCloseArticles();
                  }}
                >
                  <Select
                    label="Article"
                    value={singleArticle.article_id || ""}
                    id="select"
                    name="article_id"
                    onChange={handleArticleInputChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    style={{ width: "100%" }}
                  >
                    {renderFormSelect(selectMenuKey2, "product")};
                  </Select>
                  {renderFormControls(secondFormFields)};
                  <Button type="submit">Ajouter</Button>
                </form>
              </Box>
            </Modal>
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
