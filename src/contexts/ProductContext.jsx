import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const ProductContext = createContext(null)

export function ProductosProvider({ children }){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paginaActual, setPaginaActual] = useState(1);

    // Filtros
    const [category, setCategory] = useState(null);
    const [search, setSearch] = useState("");
    const [discount, setDiscount] = useState(0)
    const [rating, setRating] = useState(0)
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [tags, setTags] = useState("")
    const [funcFilter, setFuncFilter] = useState()

    const productosPorPagina = 8;

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
      // Reseteo Pagination cuando entro en pagina categorias o busqueda
      setPaginaActual(1)
    }, [category, search])


    // Logica de filter
    const filtered = useMemo(() => {
      return products.filter(p => {
        const matchFunc = funcFilter ? funcFilter(p) : true;
        const matchCategory = category ? p.category === category : true;
        const matchTags = tags ? p.tags === tags : true;
        const matchRating = rating ? p.rating >= rating : true;
        const matchStock = stock ? p.stock >= stock : true;
        const matchDiscount = discount ? p.discountPercentage >= discount : true;
        const matchPrice = price ? p.price >= price : true;
        const matchSearch = search ? 
         p.title.toLowerCase().includes(search.toLowerCase()) ||
         p.description?.toLowerCase().includes(search.toLowerCase()) ||
         p.brand?.toLowerCase().includes(search.toLowerCase())  : true;
        return matchCategory 
          && matchSearch 
          && matchRating 
          && matchDiscount
          && matchTags 
          && matchPrice
          && matchStock
          && matchFunc;
      });
    }, [products, category, search]);


    // Lógica de paginación
    const indiceUltimoProducto = paginaActual * productosPorPagina; 
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosVisibles = filtered.slice(indicePrimerProducto, indiceUltimoProducto);
    const totalPaginas = Math.ceil(filtered.length / productosPorPagina);


    return (
        
        <ProductContext.Provider 
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
        </ProductContext.Provider>

    )
}

export const useProducts = () => useContext(ProductContext);