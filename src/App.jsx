import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Carrito from './pages/Carrito';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';

// TODO react router

function App() {

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState(true);

  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [carritoTotal, setTotalCarrito] = useState(0)
  

// TODO quitarCarrito

  const limpiarCarrito = () => {
    setProductosEnCarrito([])
    setTotalCarrito(0)
    setContadorCarrito(0)
  }

  const  limpiarProductoCarrito = (productoCarrito) => {
    setContadorCarrito((prevContador) => prevContador - productoCarrito.cantidad)
    setTotalCarrito((prevTotal) => prevTotal - (productoCarrito.price * productoCarrito.cantidad))

    setProducts((prevProducts) => // retorno implicito de un array 
      prevProducts.map((item) => 
        item.id === productoCarrito.id
        ? { ...item, stock: item.stock + productoCarrito.cantidad } 
        : item 
      )
    );

    setProductosEnCarrito((prevProductos) =>
      prevProductos.filter((item) =>
        item.id !== productoCarrito.id 
    ))

  }
  const  disminuirProductoCarrito = (productoCarrito) => {
    setContadorCarrito((prevContador) => prevContador - 1)
    setTotalCarrito((prevTotal) => prevTotal - 1)

    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((item) =>
        item.id === productoCarrito.id 
          ? { ...item, cantidad: item.cantidad - 1 } // Incrementa la cantidad
          : item
    ))

    setProducts((prevProducts) => // retorno implicito de un array 
      prevProducts.map((item) => 
      item.id === productoCarrito.id
        ? { ...item, stock: item.stock + 1 } 
        : item 
      )
    );
  }  


  const incrementarProductoCarrito = (productoCarrito) => {
    setContadorCarrito((prevContador) => prevContador + 1)
    setTotalCarrito((prevTotal) => prevTotal + 1)

    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((item) =>
        item.id === productoCarrito.id 
          ? { ...item, cantidad: item.cantidad + 1 } // Incrementa la cantidad
          : item
    ))

    setProducts((prevProducts) => // retorno implicito de un array 
      prevProducts.map((item) => 
      item.id === productoCarrito.id
        ? { ...item, stock: item.stock - 1 } 
        : item 
      )
    );
  }

  const agregarAlCarrito = (productoAAgregar) => {
 
    const productoExiste = productosEnCarrito.find(
      (item) => item.id === productoAAgregar.id
    );

    if (productoExiste) {
      //  actualiza la cantidad del producto
      setProductosEnCarrito((prevProductos) =>
        prevProductos.map((item) =>
          item.id === productoAAgregar.id 
            ? { ...item, cantidad: item.cantidad + 1 } // Incrementa la cantidad
            : item
        )
      );
    } else {
      setProductosEnCarrito((prevProductos) => [ // retorno implicito de un array 
        ...prevProductos,
        { ...productoAAgregar, cantidad: 1 },
      ]);
    }

    setProducts((prevProducts) => // retorno implicito de un array 
        prevProducts.map((item) => 
        item.id === productoAAgregar.id
        ? { ...item, stock: item.stock - 1 } 
        : item 
      )
    );


  setContadorCarrito((prevCounter) => {
    return prevCounter + 1
  });

}

  useEffect(()=>
  {
    // hacer el pedido de la api
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
        setProducts(data.products);
        setLoading(false);
    })
    .catch(err=>{
      console.error("Error de carga de API",err);
      setLoading(false);
    });
  },[]);


  const usuario = "Jhon Doe";
  const tipo = "user";

  const navItems = ["Inicio", "Productos", "Contacto"];

  const [seccion, setSeccion] = useState("Inicio");

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header tipo={tipo} usuario={usuario} />
      <Nav items={navItems} carritoContador={contadorCarrito} onSeleccion={setSeccion} />
      <main className="flex-grow-1 p-3">
      <Routes>
        <Route path='/' element={
          <Home/>}  />
        <Route path='/Inicio' element={
          <Home/>}  />
        <Route path='/Productos' element={
          <Products products={products} onAgregarAlCarrito={agregarAlCarrito} />}  />
        <Route path='/Contact' element={
          <Contact />}  />
        <Route path='/Carrito' element={
          <Carrito  carritoTotal={carritoTotal}
               setCarritoTotal={setTotalCarrito} 
               limpiarCarrito={limpiarCarrito}
               productosCarrito={productosEnCarrito} 
               agregarCarrito={agregarAlCarrito} 
               decProductoCarrito = {disminuirProductoCarrito}
               incProductoCarrito = {incrementarProductoCarrito}
               limpiarProductoCarrito = {limpiarProductoCarrito}
               
          />}  />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
