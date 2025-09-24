import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "./ProductosContext";

const CarritoContext = createContext();


export function CarritoProvider({ children }) {


  const {products, setProducts} = useProducts()

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);
 
  const limpiarCarrito = () => {
    setProductosEnCarrito([])
    setTotalCarrito(0)
    setContadorCarrito(0)
  }

  const  eliminarProductoCarrito = (productoCarrito) => {

    setContadorCarrito((prevContador) => 
      prevContador - productoCarrito.cantidad)
    setTotalCarrito((prevTotal) => 
      prevTotal - (productoCarrito.price * productoCarrito.cantidad))

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

  const decrementarProductoCarrito = (productoCarrito) => {

    const productoExiste = productosEnCarrito.find(
      (item) => item.id === productoCarrito.id 
    );

    if (productoCarrito.cantidad <= 0) {
      return;
    }
    setContadorCarrito((prevContador) =>
      productoCarrito.stock ? prevContador - 1 : prevContador
    );
    
    // setTotalCarrito((prevTotal) =>
    //   productoCarrito.stock ? prevTotal - 1 : prevTotal
    // );

    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((item) =>
        item.id === productoCarrito.id && item.stock
          ? { ...item, cantidad: item.cantidad - 1 } // Incrementa la cantidad
          : item
      )
    );

    setProducts(
      (prevProducts) => // retorno implicito de un array
        prevProducts.map((item) =>
          item.id === productoCarrito.id && item.stock
            ? { ...item, stock: item.stock + 1 }
            : item
      )
    );
  };

  const incrementarProductoCarrito = (productoCarrito) => {

    const esProductoDisponible = productoCarrito.stock - productoCarrito.cantidad  != 0;

    if (!esProductoDisponible) {
      return;
    }


    const productoExiste = productosEnCarrito.find(
      (item) => item.id === productoCarrito.id 
    );



    if(productoCarrito.id )
    setContadorCarrito((prevContador) =>
      productoCarrito.stock ? prevContador + 1 : prevContador
    );

    // setTotalCarrito((prevTotal) =>
    //   productoCarrito.stock ? prevTotal + 1 : prevTotal
    // );

    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((item) =>
        item.id === productoCarrito.id && item.stock
          ? { ...item, cantidad: item.cantidad + 1 } // Incrementa la cantidad
          : item
      )
    );

    setProducts((prevProducts) => // retorno implicito de un array
        prevProducts.map((item) =>
          item.id === productoCarrito.id && item.stock
            ? { ...item, stock: item.stock - 1 }
            : item
        )
    );
  };


  const agregarAlCarrito = (productoAAgregar) => {
 
    if(productoAAgregar.stock <= 0){
      return
    }
    
    const productoExiste = productosEnCarrito.find(
      (item) => item.id === productoAAgregar.id 
    );

    if (productoExiste) {
      //  actualiza la cantidad del producto
      setProductosEnCarrito((prevProductos) =>
        prevProductos.map((item) =>
          item.id === productoAAgregar.id && item.stock 
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
        item.id === productoAAgregar.id && item.stock
        ? { ...item, stock: item.stock - 1 } 
        : item 
      )
    );


  setContadorCarrito((prevCounter) => (
    productoAAgregar.stock ?  prevCounter + 1 : prevCounter
  ));

  }

  useEffect(() => {
    if (productosEnCarrito.length != 0) {
      setTotalCarrito(
        productosEnCarrito.reduce(
         (accumulator, item) => accumulator + item.price * item.cantidad
         ,0)
      );
    }
  }, [productosEnCarrito]);
  

  return (
    <CarritoContext.Provider 
    value={{  incrementarProductoCarrito,  
         decrementarProductoCarrito, 
         eliminarProductoCarrito, 
         productosEnCarrito, 
         setProductosEnCarrito, 
         contadorCarrito, 
         setContadorCarrito,  
         totalCarrito, 
         setTotalCarrito, 
         setProducts, 
         products,
         limpiarCarrito,
         agregarAlCarrito}}>
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarrito = () => useContext(CarritoContext);