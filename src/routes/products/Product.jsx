import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Categories from '../../components/categories/Category';
import List from '../../components/table/Table';
import QuickAccess from '../../components/quick-accesses/QuickAccess';
import { articles, headers } from '../../mocks/articles/articles';
import "./products.scss";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('ifrane');
  const [data, setData] = useState('');

  useEffect(() => {
    console.log(headers);
  }, [headers]);

  useEffect(() => {
    const getArrayByKey = (key) => {
      for (const item of articles) {
        if (item.hasOwnProperty(key)) {
          setData(item[key]);
        }
      }
    }
    return getArrayByKey(selectedCategory);
  }, [selectedCategory])

  useEffect(() => {
    console.log(data)
  }, [data]);
  const handleSelectedCategoryChange = (category) => {
    setSelectedCategory(category);
  }
  
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="quick-access-container">
          <QuickAccess type='ajouter-category' />
          <QuickAccess type='ajouter-produit' />
        </div>
        <div className="componentsContainer">
          <Categories selectedCategory={selectedCategory} onSelectedCategoryChange={handleSelectedCategoryChange} />
          <List data={data} heade={headers} />
        </div>
      </div>
    </div>
  )
}

export default Products