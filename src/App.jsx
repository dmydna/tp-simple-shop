import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import RutaProtegida from "./components/RutaProtegida";
import Admin from "./pages/Admin";
import Carrito from "./pages/Carrito";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Products from "./pages/Products";

import { DropdownContext } from "./contexts/DropdownContext";
import { ProductosContext } from "./contexts/ProductosContext";


function App() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [products, setProducts] = useState([]);
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);


  const [loading, setLoading] = useState(true);

  const useProductosContext = {
    productosEnCarrito, setProductosEnCarrito, 
    products, setProducts, 
    contadorCarrito, setContadorCarrito, 
    totalCarrito, setTotalCarrito,
  }



  useEffect(() => {
    // hacer el pedido de la api
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error de carga de API", err);
        setLoading(false);
      });
  }, []);



  const navItems = ["Inicio", "Productos", "Contacto"];
  const [seccion, setSeccion] = useState("Inicio");

  return (
    <div className="d-flex flex-column min-vh-100">
      <DropdownContext.Provider value={{ isActiveDropdown, setIsActiveDropdown }} >
        <Header />
        <Nav items={navItems} contadorCarrito={contadorCarrito} seccion={seccion} onSeleccion={setSeccion}/>
      </DropdownContext.Provider>

      <main className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/perfil/:id" element={
            <RutaProtegida> 
              <Perfil /> 
            </RutaProtegida>}>
          </Route>
          <Route path="/admin" element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>}>
          </Route>
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Carrito"   element={
            <ProductosContext.Provider value={useProductosContext}>
              <Carrito/>
            </ProductosContext.Provider> } 
          />
          <Route path="/Productos" element={
            <ProductosContext.Provider value={useProductosContext}>
              <Products/>
            </ProductosContext.Provider>} 
          />
        </Routes>
              
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
