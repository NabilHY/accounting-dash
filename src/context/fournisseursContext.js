import React, { useState, useEffect } from 'react';
import { fetchFournisseur } from '../api/fournisseurs';

export const FournisseursContext = React.createContext();

export const FournisseursContextProvider = (props) => {

  const [fournisseurs, setFournisseurs] = useState([]);
  const [fournisseursNamesAndIds, setFournisseursNamesAndIds] = useState('');

    
  
  useEffect(() => {
    const getFournisseurs = async () => {
      const data = await fetchFournisseur();
      setFournisseurs(data);
      console.log(data);
    }
    getFournisseurs();
  }, []);

  useEffect(() => {
    const getNameAndIds = async () => {
      const data = await fetchFournisseur();
      const arrayOfNamesAndIds = data.map(obj => (
        {
          id: obj.id,
          name: obj.fournisseur,
        }
      ))
      setFournisseursNamesAndIds(arrayOfNamesAndIds)
    }
    getNameAndIds();
  }, [])
  
    return (
        <FournisseursContext.Provider value={{ fournisseurs, fournisseursNamesAndIds }}>
          {props.children}
        </FournisseursContext.Provider>
      );

}