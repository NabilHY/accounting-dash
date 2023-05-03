import React, { useState, useEffect } from 'react';
import { fetchFournisseur } from '../api/fournisseurs';

export const FournisseursContext = React.createContext();

export const FournisseursContextProvider = (props) => {

    const [fournisseurs, setFournisseurs] = useState([]);

    
  
    useEffect(() => {
        const getFournisseurs = async () => {
          const data = await fetchFournisseur();
          setFournisseurs(data);
          console.log(data);
        }
        getFournisseurs();
    }, [])
  
    return (
        <FournisseursContext.Provider value={{ fournisseurs }}>
          {props.children}
        </FournisseursContext.Provider>
      );

}