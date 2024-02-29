// import { Button } from "./Components/Button/Button"
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./Accueil";
import { Rechercher } from "./Recherche";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import datas from "../product.json"
import Produit from "./Produit";

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    setProductList(datas.products)
    setFilteredProduct(datas.products)
  }, [datas.products])
  
  function onSearch(searchTerm) {
    
    const filteredProduct = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProduct(filteredProduct);
    console.log(filteredProduct);
  }
  return (
    <>
      <Header onSearch={onSearch}/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/recherche" element={<Rechercher filteredProduct={filteredProduct} />} />
        <Route path="/produit/:id" element={<Produit/>}>

        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
