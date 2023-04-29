import React, { useState, useEffect } from 'react';
import { fetchCategories, fetchProductsByCategoryId } from '../api/categories';

export const CategoriesContext = React.createContext();

export const CategoriesContextProvider = (props) => {

  const [categories, setCategories] = useState([]);
  const [productsByCategoryId, setProductsByCategoryId] = useState({});
  const [id, setId] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      const categoriesArray = data.map(item => ({ id: item.id, category: item.category }));
      setCategories(categoriesArray);
    }
    getCategories();
  }, [])

  useEffect(() => {
    console.log(productsByCategoryId)
  }, [productsByCategoryId])

  useEffect(() => {
    const getProductsByCategoryId = async (categoryId) => {
      const data = await fetchProductsByCategoryId(categoryId);
      setProductsByCategoryId(data);
      console.log(data);
    }
    getProductsByCategoryId(id)
  }, [id])

  return (
    <CategoriesContext.Provider value={{ categories, productsByCategoryId, id, setId }}>
      {props.children}
    </CategoriesContext.Provider>
  );
}