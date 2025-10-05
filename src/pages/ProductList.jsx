import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useMatch } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import CategoryNav from "../components/CategoryNav";
import { HoverProvider } from "../contexts/HoverContext";
import HoverWrapper from "../contexts/HoverWrapper";
import { useProducts } from "../contexts/ProductContext";

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
      setMeta(prev => ({ ...prev,  title: categoryMatch.params.category, message: filtered.length + " productos"}));

    } else if (searchMatch?.params.product) {
      setSearch(searchMatch?.params.product);
      setCategory(null); // limpia categoría si vengo de búsqueda
      setMeta(prev => ({ ...prev, title: "Resultados de Busqueda", message: filtered.length + " encontrado"  // ahora sí usa el estado
      }))

    } else {
      setCategory(null);
      setSearch("");
      setMeta(prev => ({ ...prev, title: "Productos", message: "todas las categorias" }));
    }
  }, [location, searchMatch, categoryMatch, filtered]);

 


  const cardLinkStyle = {height: "3.2rem", overflow: "hidden", textDecoration: "none", fontWeight: "bold" }
  const textWrap = { textWrap: "nowrap", textOverflow: "ellipsis", width: "100%", overflow: "hidden"}


  return (
    <HoverProvider>
<Container className="mt-2 bg-white rounded">
      { <>
       <CategoryNav show={showCategoryNav} />
       <div className="w-100 d-flex  align-items-center justify-content-between">
         <h1 className="text-capitalize" >{meta.title}</h1>
         <i  onClick={() => setShowCategoryNav(prev => !prev)} style={{fontSize: "x-large"}} className="bi bi-three-dots-vertical"></i>
       </div>
       </> }
      <Row>
        <span className="mb-5">{meta.message}</span>
        {productosVisibles.map((product) => (  
          <Col className="d-flex flex-column" key={product.id} md={3}>
          <HoverWrapper id={product.id}>
          {(isHovered) => (
            <Card className={`row m-2 text-decoration-none ${isHovered ? 'shadow' : ''}`}>
              <Link 
               className="text-decoration-none text-black"
               to={"/productos/details/" + encodeURIComponent(product.title)}
              >
              <Card.Img  src={product.thumbnail} />
              <Card.Body>
                <Card.Title 
                 className={`d-block text-${ isHovered ? 'primary' : 'black'}`}
                 style={cardLinkStyle}>
                  {product.title}
                </Card.Title>
                <Card.Text className="h3 text-truncate">
                  $ {product.price || "N/A"}
                </Card.Text>
                <Card.Text className="fw-bolder text-secondary">
                  stock: {product.stock || 0}
                </Card.Text>
              </Card.Body>
              </Link>
              <Card.Text className="w-100 d-flex mb-2">
                  <AddToCartButton variant='outline-success' product={product}/> 
              </Card.Text>
            </Card>
              )}
            </HoverWrapper>
          </Col>
        ))}
      </Row>
      <hr className="mt-5"/>
    </Container>
    </HoverProvider>
    
  );
}

export default Products;
