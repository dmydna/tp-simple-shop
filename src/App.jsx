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
import NotFound from "./pages/NotFound";
import ProductsDetails from "./pages/ProductsDetails";
import { CarritoProvider } from "./contexts/CarritoContext";
import { DropdownContext } from "./contexts/DropdownContext";
import { ProductosProvider } from "./contexts/ProductosContext";
import { AuthProvider } from "./contexts/AuthContext";
import Paginador from "./components/Paginador";


import ProductManager from "./pages/ProductManager";

function App() {
 
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const navItems = ["Inicio", "Productos", "Contacto"];
  const [seccion, setSeccion] = useState("Inicio");

  const mode = 'preview';


  return (
    <AuthProvider>
    <ProductosProvider mode={mode}>
    <CarritoProvider>
    <div className="d-flex flex-column min-vh-100">
      <DropdownContext.Provider value={{ isActiveDropdown, setIsActiveDropdown }} >
        <Header />
        <Nav items={navItems} seccion={seccion} onSeleccion={setSeccion}/>
      </DropdownContext.Provider>
      <main className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Home />} />
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
          <Route path="/contacto" element={<Contact />} />
          <Route path="/carrito"   element={
              <Carrito/>} 
          />
          <Route path="/productos/category/:category" element={
            <>
            <Products/>
            <Paginador />
            </>

          }
          /> 
          <Route path="/productos/search/:product" element={
            <> 
            <Products/>
            <Paginador/>
            </>
          }
          />         
          <Route path="/productos/details/:name" element={
              <ProductsDetails /> 
            } 
          />
          <Route path="/productos" element={
            <> <Products/>
              <Paginador />
            </>}
          />
          <Route path="/admin/:manager" element= {             
             <RutaProtegida>
               <ProductManager />
             </RutaProtegida>} />
          {/* Ruta para no coincidencias */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
      <Footer />
    </div>
    </CarritoProvider>
    
    </ProductosProvider>
    
    </AuthProvider>
  );
}

export default App;
