import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Carrito from './components/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState(true);

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
      setProductosEnCarrito((prevProductos) => [ // ojo aca, retorno implicito de un array 
        ...prevProductos,
        { producto: productoAAgregar, cantidad: 1 },
      ]);
    }

    setProducts((prevProducts) => // ojo aca, retorno implicito de un array 
        prevProducts.map((producto) => 
      producto.id === productoAAgregar.id
        ? { ...producto, stock: producto.stock - 1 } 
        : producto 
    )
  );


  };

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


  const usuario = "Nicolas Fernandez";
  const tipo = "Administrador";

  const navItems = ["Inicio", "Productos", "Contacto", "Carrito"];
  const imagenes = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
  ];

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
      case "Carrito":
        return <Carrito productos={setProducts} 
                productosCarrito={productosEnCarrito} 
                agregarCarrito={agregarAlCarrito} />
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header tipo={tipo} usuario={usuario} />
      <Nav items={navItems} onSeleccion={setSeccion} />
      <main className="flex-grow-1 p-3">
        {renderContenido()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
