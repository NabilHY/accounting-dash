import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';

export const ProductsContext = React.createContext();

export const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          const data = await fetchProducts();
          setProducts(data);
          console.log(data);
        }
        getProducts();
    }, [])
  
    return (
        <ProductsContext.Provider value={{ products }}>
          {props.children}
        </ProductsContext.Provider>
      );

}