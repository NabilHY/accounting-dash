import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import { CategoriesContext } from "../../context/categoriesContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { fetchProducts } from "../../api/products";
import Categories from "../../components/categories/Category";
import List from "../../components/table/Table";
import QuickAccess from "../../components/quick-accesses/QuickAccess";
import { articles, headers } from "../../mocks/articles/articles";
import "./products.scss";

const Products = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { products, setProducts } = useContext(ProductsContext);
  const { categories, productsByCategoryId, setId } = useContext(CategoriesContext);
  const [parentSelectedId, setParentSelectedId] = useState(1);
  const [activeData, setActiveData] = useState(products);

  const headers = [
    "id",
    "article_libelle",
    "reference",
    "prix_unitaire",
    "prix_public",
    "client_Fedele",
    "demi_grossiste",
    "unite",
    "category_id",
    "created_at",
  ];

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setActiveData(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (parentSelectedId === 1) {
      setActiveData(products);
    } else {
      setActiveData(productsByCategoryId)
    }
}, [parentSelectedId, products, productsByCategoryId]);

  useEffect(() => {
    const getArrayByKey = (key) => {
      for (const item of articles) {
        if (item.hasOwnProperty(key)) {
          setData(item[key]);
        }
      }
    };
    return getArrayByKey(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    console.log(activeData);
  }, [activeData])

  const handleSelectedCategoryChange = (category) => {
    setSelectedCategory(category.id);
    setSelectedId(category.id);
    setId(category.id); 
  };

  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="quick-access-container">
          <QuickAccess type="ajouter-category" />
          <QuickAccess type="ajouter-produit" />
        </div>
        <div className="componentsContainer">
          <Categories
            setParentSelectedId={setParentSelectedId}
            parentSelectedId={parentSelectedId}
            selectedCategory={selectedCategory}
            onSelectedCategoryChange={handleSelectedCategoryChange}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <List data={activeData} heade={headers} prop={true} />
)}
  
        </div>
      </div>
    </div>
  );
};

export default Products;
