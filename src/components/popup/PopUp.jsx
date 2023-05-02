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

export const ExampleModal = ({show, handleClose}) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});



  useEffect(() => {
    if (show) {
      setOpen(true);
    }
  }, [])

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log(formState);
  }, [formState])

  const handleChange = (event) => {
    const { name, value } = event.target;
    formState({ ...formState, [name]: value });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { article_libelle, reference, prix_unitaire, prix_public, client_Fedele, demi_grossiste, unite, category_id} = formState;
    // const validationErrors = {};
    // // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    // } else {
      const data = { article_libelle, reference, prix_unitaire, prix_public, client_Fedele, demi_grossiste, unite, category_id };
      const response = await fetch("https://iker.wiicode.tech/api/articles", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Employee added successfully");
        handleClose();
      } else {
        console.error("Failed to add employee");
      }
    handleClose();
  };

  const fields = [
    { label: 'Article libelle', name: 'article_libelle' },
    { label: 'Reference', name: 'reference' },
    { label: 'Prix unitaire', name: 'prix_unitaire' },
    { label: 'Prix public', name: 'prix_public' },
    { label: 'Client Fedele', name: 'client_Fedele' },
    { label: 'Demi grossiste', name: 'demi_grossiste' },
    { label: 'Unite', name: 'unite' },
    { label: 'Category ID', name: 'category_id' },
  ];
  
  const modalBody = (
    <>
    <Typography variant="h6" gutterBottom>
      Add New Item
    </Typography>
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          label={field.label}
          value={formState[field.name] || ''}
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
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={handleClose} sx={{ mr: 1 }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
          Save
        </Button>
      </Box>
    </form>
    </>
  );

  return (
    <Modal open={open} onClose={handleClose} sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 4,
            p: 2,
            minWidth: 300,
            maxWidth: 500
          }}
            >
          <div>{modalBody}</div>
          </Box>
    </Modal>
  );
};