import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';

export const ProductsContext = React.createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productsSelect, setProductsSelect] = useState([])

    useEffect(() => {
        const getProducts = async () => {
          const data = await fetchProducts();
          const filteredProducts = data.map(product => (
            {
              name: product.article_libelle,
              id: product.id,
              unit_price: product.prix_unitaire,
            }
          ))
          setProducts(data);
          setProductsSelect(filteredProducts)
          console.log(data);
        }
        getProducts();
    }, [])
  
    return (
        <ProductsContext.Provider value={{ products, productsSelect }}>
          {props.children}
        </ProductsContext.Provider>
      );

}