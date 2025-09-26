import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import CarritoItem from "../components/CartItem";
import { useWindowsHeight } from "../components/useWindowSize";
import { useCarrito } from "../contexts/CartContext";

function Carrito() {

  const height = useWindowsHeight()

  const { limpiarCarrito, 
      setTotalCarrito, 
      totalCarrito,
      productosEnCarrito 
  } = useCarrito()


  return( productosEnCarrito.length != 0 ? 
    <Container className="mt-4">
      <div className="h1">Carrito</div>

      <div style={
        height >= 1000 ? {height: "calc(100vh - 480px)", overflow: "auto"} : {} }>
      <CarritoItem/>
      </div>
        <div className="my-3 mx-2 d-flex flex-row-reverse">
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => limpiarCarrito()}
          >
            <i className="bi bi-trash3" /> Vaciar carrito
          </Button>
      </div>
      <Card className="m-2">
        <Card.Body className="d-flex">
          <Card.Text className="h3"> Total</Card.Text>
          <Card.Text className="h3 ms-auto me-1">$ {totalCarrito.toFixed(2)}</Card.Text>
        </Card.Body>
        <Button className="m-2" variant="primary" type="submit">
          Finalizar Compra
        </Button>
      </Card>
    </Container> :
  <Container style={{height: "80vh"}} 
  className="mt-4 overflow-hidden container d-flex row mx-auto">
    <h1>Carrito</h1>
    <div>
    <img style={{
      marginInline: "auto",
      maxWidth: "400px",
      display: "block", 
      position: "relative",
    }} 
      src="/shopping.png" />
    </div>

    <h2 style={{textAlign: "center"}} className="text-muted fw-bolder">
      Tu carrito esta vacio!
    </h2>
  </Container>
  )


  

  //muestro las cards
}

export default Carrito;
