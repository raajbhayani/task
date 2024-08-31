import { Navbar } from "../components/Navbar"
import { SubNav } from "../components/SubNav"
import { Products } from "./Products"
import axios from "axios";
import { useEffect, useState } from "react";
export const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  const getProduct = async () => {
    const res = await axios.get("https://dummyjson.com/products/");
    setProducts(res?.data?.products);
    
    const categories = ['All', ...new Set(res?.data?.products.map(product => product.category))];
    setCategories(categories);
  };


    const filterProducts = (category) =>{
      const result = category === "All" ? products : products.filter(product => product.category === category);
      setSelectedProducts(result)
    }

   

  useEffect(() => {
    getProduct();
   
  }, []);
  return (
    <div>
        <Navbar/>
        <SubNav data={categories} handleFilter={filterProducts}/>
        <Products data={selectedProducts.length > 0 ? selectedProducts : products}/>
    </div>
  )
}


