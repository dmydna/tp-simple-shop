import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

export const ProductosContext = createContext(null)

export function ProductosProvider({ children }){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paginaActual, setPaginaActual] = useState(1);
    const [category, setCategory] = useState(null);
    const [search, setSearch] = useState("");
    const productosPorPagina = 6;

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

    useEffect( ()=>{
      // Reseteo paginador cuando entro en pagina categorias o busqueda
      setPaginaActual(1)
    }, [category, search])


    // Logica de filter
    const filtered = useMemo(() => {
      return products.filter(p => {
        const matchCategory = category ? p.category === category : true;
        const matchSearch = search ? 
         p.title.toLowerCase().includes(search.toLowerCase()) ||
         p.description?.toLowerCase().includes(search.toLowerCase()) ||
         p.brand?.toLowerCase().includes(search.toLowerCase())  : true;
        return matchCategory && matchSearch;
      });
    }, [products, category, search]);


    // Lógica de paginación
    const indiceUltimoProducto = paginaActual * productosPorPagina; 
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosVisibles = filtered.slice(indicePrimerProducto, indiceUltimoProducto);
    const totalPaginas = Math.ceil(filtered.length / productosPorPagina);


    return (
        
        <ProductosContext.Provider 
        value={{ 
          products, setProducts, 
          loading, setLoading, 
          totalPaginas, 
          paginaActual, setPaginaActual, 
          productosVisibles ,
          filtered,
          setCategory,
          setSearch,
          }}>
            {children}
        </ProductosContext.Provider>

    )
}

export const useProducts = () => useContext(ProductosContext);