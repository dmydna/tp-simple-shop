import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useMatch } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import CategoryNav from "../components/CategoryNav";
import { HoverProvider } from "../contexts/HoverContext";
import HoverWrapper from "../contexts/HoverWrapper";
import { useProducts } from "../contexts/ProductContext";
import CardProduct from "../components/CardProduct";
import BuyNowButton from "../components/BuyNowButton";

function Products() {

  // Agregar al Carrito, actualiza stock e incrementa producto en el Carrito

  const categoryMatch = useMatch("/productos/category/:category");
  const searchMatch = useMatch("/productos/search/:product");

  const { productosVisibles, setCategory, setSearch, filtered, products } = useProducts();
  const location = useLocation();

  // Informacion a mostrar segun Pagina
  const [meta, setMeta] = useState({
    title: "Productos",
    message: "",
    description: "",
  });
  

  const [ showCategoryNav, setShowCategoryNav ] = useState(false);

  
  useEffect(() => {
    if (categoryMatch?.params.category) {

      setCategory(categoryMatch.params.category);
      setSearch(""); // limpia búsqueda si vengo de categoría
      setMeta(prev => 
      ({ ...prev,  
        title: categoryMatch.params.category, 
        message: filtered.length + " productos"
      }));

    } else if (searchMatch?.params.product) {
      setSearch(searchMatch?.params.product);
      setCategory(null); // limpia categoría si vengo de búsqueda
      setMeta(prev => 
      ({ ...prev, 
        title: "Resultados de Busqueda", 
        message: filtered.length + " encontrado"  // ahora sí usa el estado
      }))

    } else {
      setCategory(null);
      setSearch("");
      setMeta(prev => 
      ({ ...prev, 
        title: "Productos", 
        message: "todas las categorias" 
      }));
    }
  }, [location, searchMatch, categoryMatch, filtered]);

 
  return (
    <Container className="mt-2 mb-5 pb-5 bg-white rounded">
      { <>
       <CategoryNav show={showCategoryNav} />
       <div className="w-100 d-flex  align-items-center justify-content-between">
         <p className="text-capitalize fw-medium fs-3" >{meta.title}</p>
         <i  onClick={() => setShowCategoryNav(prev => !prev)} style={{fontSize: "x-large"}} 
         className="bi bi-three-dots-vertical btn-hover"></i>
       </div>
       </> }
      <Row>
        <span className="mb-5">{meta.message}</span>
        {productosVisibles.map((p) => (  
          <CardProduct className={'border'}
            id={p.id}
            image={p.thumbnail}
            title={p.title}
            stock={p.stock}
            price={p.price}
          >
          <AddToCartButton variant="outline-success" id={p.id} />
          </CardProduct>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
