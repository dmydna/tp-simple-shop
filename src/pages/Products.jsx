import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ProductosContext } from "../contexts/ProductosContext";

function Products() {
  // Agregar al Carrito, actualiza stock e incrementa producto en el Carrito

  const { productosEnCarrito, setProductosEnCarrito,
      products,setProducts,
      contadorCarrito, setContadorCarrito,
      totalCarrito, setTotalCarrito
  } = useContext(ProductosContext)



  const agregarAlCarrito = (productoAAgregar) => {
    
    if (productoAAgregar.stock <= 0) {
      return;
    }

    const productoExiste = productosEnCarrito.find(
      (item) => item.id === productoAAgregar.id
    );

    if (productoExiste) {//  actualiza la cantidad del producto
      setProductosEnCarrito((prevProductos) =>
        prevProductos.map((item) =>
          item.id === productoAAgregar.id && item.stock
            ? { ...item, cantidad: item.cantidad + 1 } // Incrementa la cantidad
            : item
        )
      );
    } else {
      setProductosEnCarrito((prevProductos) => [
        ...prevProductos,
        { ...productoAAgregar, cantidad: 1 },
      ]);
    }

    setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === productoAAgregar.id && item.stock
            ? { ...item, stock: item.stock - 1 }
            : item
        )
    );

    setContadorCarrito((prevCounter) =>
      productoAAgregar.stock ? prevCounter + 1 : prevCounter
    );
  };

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      <Row>
        {products.map((product) => (
          <Col className="d-flex flex-column" key={product.id} md={4}>
            <Card className="row m-2">
              <Card.Img  style={{minHeight : '315px' }} src={product.thumbnail} />
              <Card.Body>
                <Card.Title style={{ height: "3.2rem", overflow: "hidden" }}>
                  {product.title}
                </Card.Title>
                <Card.Text className="h1">
                  $ {product.price || "N/A"}
                </Card.Text>
                <Card.Text className="fw-bolder text-secondary">
                  stock: {product.stock || 0}
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              onClick={() => agregarAlCarrito(product) }
              className="mx-2 my-2 fw-bold"
              variant="success"
              type="submit"
            > 
                {productosEnCarrito.map((item)=> 
                  item.id === product.id && item.cantidad != 0 ?
                  <div className="position-relative d-inline-block me-3">
                  <span className=" p-1 rounded-circle badge bg-white text-success">
                    {item.cantidad < 10 ? (`0${item.cantidad}`) : item.cantidad }
                  </span> 
                  </div> : '' 
                )}
              Agregar al Carrito
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
