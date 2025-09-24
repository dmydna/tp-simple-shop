import React, { createContext, useContext, useState, useEffect } from "react";

export const ProductosContext = createContext(null)

export function ProductosProvider({ children }){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterProducts, setFilterProducts] = useState([])

    useEffect( () => { 
      const fetchData = async () => {// hacer el pedido de la api
        await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log("se carga de API")
          setProducts(data.products);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error de carga de API", err);
          setLoading(false);
        });
      } 
      fetchData() 
    }, []);


    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 6;

    // Lógica de paginación
    const indiceUltimoProducto = paginaActual * productosPorPagina; 
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;


    const productosVisibles = products.slice(indicePrimerProducto, indiceUltimoProducto);
    const totalPaginas = Math.ceil(products.length / productosPorPagina);


    return (
        
        <ProductosContext.Provider 
        value={{ 
          products, setProducts, 
          loading, setLoading, 
          totalPaginas, 
          paginaActual, setPaginaActual, 
          productosVisibles ,
          filterProducts, setFilterProducts
          }}>
            {children}
        </ProductosContext.Provider>

    )
}

export const useProducts = () => useContext(ProductosContext);