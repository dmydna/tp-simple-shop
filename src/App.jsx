import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartCanvas from './components/CartCanvas';

// TODO react router

function App() {

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState(true);

  const [counter, setCounter] = useState(0);

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const agregarAlCarrito = (productoAAgregar) => {
 
    const productoExiste = productosEnCarrito.find(
      (item) => item.producto.id === productoAAgregar.id
    );

    if (productoExiste) {
      //  actualiza la cantidad del producto
      setProductosEnCarrito((prevProductos) =>
        prevProductos.map((item) =>
          item.producto.id === productoAAgregar.id
            ? { ...item, cantidad: item.cantidad + 1 } // Incrementa la cantidad
            : item
        )
      );

    } else {
      setProductosEnCarrito((prevProductos) => [ // retorno implicito de un array 
        ...prevProductos,
        { producto: productoAAgregar, cantidad: 1 },
      ]);
    }

    setProducts((prevProducts) => // retorno implicito de un array 
        prevProducts.map((producto) => 
      producto.id === productoAAgregar.id
        ? { ...producto, stock: producto.stock - 1 } 
        : producto 
    )
  );


  setCounter((prevCounter) => {
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

  const renderContenido = () => 
    {
    switch (seccion) {
      case "Inicio":
        return <Home />;
      case "Productos":
        return <Products products={products} onAgregarAlCarrito={agregarAlCarrito} />;
      case "Contacto":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header tipo={tipo} usuario={usuario} />
      <Nav items={navItems} 
        counter={counter} 
        onSeleccion={setSeccion} 
        handleShowCart={handleShowCart}
      />
      <CartCanvas productos={setProducts} 
            productosCarrito={productosEnCarrito} 
            agregarCarrito={agregarAlCarrito} 
            showCart={showCart}
            handleCloseCart = {handleCloseCart}
      />
      <main className="flex-grow-1 p-3 bg-light">
      {renderContenido()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
