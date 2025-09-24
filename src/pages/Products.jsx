import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useMatch } from "react-router-dom";
import CarritoAgregarBoton from "../components/CarritoAgregarBoton";
import { HoverProvider } from "../contexts/HoverContext";
import HoverWrapper from "../contexts/HoverWrapper";
import { useProducts } from "../contexts/ProductosContext";

function Products() {

  // Agregar al Carrito, actualiza stock e incrementa producto en el Carrito

  const categoryMatch = useMatch("/productos/category/:category");
  const searchMatch = useMatch("/productos/search/:product");


 

  // Informacion a mostrar segun Pagina
  const [meta, setMeta] = useState({
    title: "Productos",
    message: "",
    description: "",
  });
  
  const { productosVisibles, products} = useProducts()

  const [filterProducts, setFilterProducts] = useState(productosVisibles)

  // recalcula productos filtrados
  useEffect(() => {
    let filtered = productosVisibles;
  
    if (categoryMatch?.params.category) {
      filtered = products.filter((item) =>
        item.category == categoryMatch.params.category
      );
    } else if (searchMatch?.params.product) {
      filtered = products.filter((item) =>
        item.title.toLowerCase().includes(searchMatch.params.product.toLowerCase())
      );
    }
  
    setFilterProducts(filtered);
  }, [categoryMatch, searchMatch, productosVisibles]);
  
  // actualiza meta cuando cambia el filtro
  useEffect(() => {
    if (categoryMatch?.params.category) {
      setMeta(prev => ({ ...prev, title: categoryMatch.params.category }));
    } else if (searchMatch?.params.product) {
      setMeta(prev => ({ 
        ...prev, 
        title: "Resultados de Busqueda",
        message: filterProducts.length + " encontrado"  // ahora sí usa el estado
      }));
    } else {
      setMeta(prev => ({ ...prev, title: "Productos" }));
    }
  }, [categoryMatch, searchMatch, filterProducts]);


  const cardLinkStyle = {height: "3.2rem", overflow: "hidden", textDecoration: "none", fontWeight: "bold" }
  const textWrap = { textWrap: "nowrap", textOverflow: "ellipsis", width: "100%", overflow: "hidden"}

  return (
    <HoverProvider>
<Container className="mt-2 py-3 bg-white rounded">
      { <>
       <h1>{meta.title}</h1>
       </> }
      <Row>
      <span>{meta.message}</span>
        {filterProducts.map((product) => (  
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
                  <CarritoAgregarBoton variant='outline-success' product={product}/> 
              </Card.Text>
            </Card>
              )}
            </HoverWrapper>
          </Col>
        ))}
      </Row>
    </Container>
    </HoverProvider>
    
  );
}

export default Products;
