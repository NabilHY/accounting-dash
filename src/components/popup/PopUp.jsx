import { useState, useEffect } from "react";

import {
  Modal,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
} from "@mui/material";

export const ExampleModal = ({ show, handleClose, type, select }) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({});
  const [formData, setFormData] = useState({});
  const [baseUrl, setBaseUrl] = useState("");
  const [fields, setFields] = useState([]);
  const [errors, setErrors] = useState({});
  const [selectInputs, setSelectInputs] = useState([]);

  useEffect(() => {
    if (select) {
      setSelectInputs(select);
      console.log(selectInputs);
    }

    switch (type) {
      case "produit":
        setFields([
          { label: "Article libelle", name: "article_libelle" },
          { label: "Reference", name: "reference" },
          { label: "Prix unitaire", name: "prix_unitaire" },
          { label: "Prix public", name: "prix_public" },
          { label: "Client Fedele", name: "client_Fedele" },
          { label: "Demi grossiste", name: "demi_grossiste" },
          { label: "Unite", name: "unite" },
        ]);
        setBaseUrl("https://iker.wiicode.tech/api/articles");
        setFormData({
          title: "Ajouter Un Produit",
        });
        break;
      case "category":
        setFields([{ label: "Category", name: "category" }]);
        setBaseUrl("https://iker.wiicode.tech/api/categories");
        setFormData({
          title: "Ajouter Une Category",
        });
        break;
      case "fournisseur":
        setFields([
          { label: "Code fournisseur", name: "code_fournisseur" },
          { label: "Fournisseur", name: "fournisseur" },
          { label: "ICE", name: "ICE" },
          { label: "IF", name: "IF" },
          { label: "RC", name: "RC" },
          { label: "Adresse", name: "Adresse" },
          { label: "E-mail", name: "email" },
          { label: "Telephone", name: "telephone" },
        ]);
        setBaseUrl("https://iker.wiicode.tech/api/fournisseurs");
        setFormData({
          title: "Ajouter Un Fournisseurs",
        });
        break;
      default:
        break;
    }
  }, [type]);

  useEffect(() => {
    if (show) {
      setOpen(true);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    for (const [key, value] of Object.entries(formState)) {
      data[key] = value;
    }
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(`${type} added successfully`);
      handleClose();
    } else {
      console.error("Failed to add employee");
    }
    handleClose();
  };

  const modalBody = (
    <>
      <Typography variant="h6" gutterBottom>
        {formData.title}
      </Typography>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            value={formState[field.name] || ""}
            onChange={handleInputChange}
            error={Boolean(errors[field.name])}
            helperText={errors[field.name]}
            margin="normal"
            fullWidth
            required
            variant="outlined"
            sx={{ mb: 2 }}
          />
        ))}
        {select && selectInputs.length > 0 && (
          <Select
            labelId="category-select-label"
            id="category-select"
            name="category_id"
            value={formState.category_id || ""}
            onChange={handleChange}
            label="Category"
            margin="normal"
            fullWidth
            required
            variant="outlined"
            sx={{ mb: 2 }}
          >
            {selectInputs.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.category}
              </MenuItem>
            ))}
          </Select>
        )}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" onClick={handleClose} sx={{ mr: 1 }}>
            Annuler
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
          >
            Enregistrer
          </Button>
        </Box>
      </form>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
        }}
      >
        <div>{modalBody}</div>
      </Box>
    </Modal>
  );
};
