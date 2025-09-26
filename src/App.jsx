import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { CarritoProvider } from "./contexts/CartContext";
import { DropdownContext } from "./contexts/DropdownContext";
import { ProductosProvider } from "./contexts/ProductContext";
import Admin from "./pages/Admin";
import Carrito from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Perfil from "./pages/Perfil";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/ProductList";


import AdminProductTable from "./pages/AdminProductTable";

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
            <ProtectedRoute> 
              <Perfil /> 
            </ProtectedRoute>}>
          </Route>
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>}>
          </Route>
          <Route path="/contacto" element={<Contact />} />
          <Route path="/carrito"   element={
              <Carrito/>} 
          />
          <Route path="/productos/category/:category" element={
            <>
            <Products/>
            <Pagination />
            </>

          }
          /> 
          <Route path="/productos/search/:product" element={
            <> 
            <Products/>
            <Pagination/>
            </>
          }
          />         
          <Route path="/productos/details/:name" element={
              <ProductDetails /> 
            } 
          />
          <Route path="/productos" element={
            <> <Products/>
              <Pagination />
            </>}
          />
          <Route path="/admin/:manager" element= {             
             <ProtectedRoute>
               <AdminProductTable />
             </ProtectedRoute>} />
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
