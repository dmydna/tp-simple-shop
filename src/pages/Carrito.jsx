import React, { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import CarritoItem from "../components/CarritoItem";
import { ProductosContext } from "../contexts/ProductosContext";

function Carrito() {

  const {
    productosEnCarrito, setProductosEnCarrito,
    products,setProducts,
    contadorCarrito, setContadorCarrito,
    totalCarrito, setTotalCarrito,
  } = useContext(ProductosContext)


  const limpiarCarrito = () => {
    setProductosEnCarrito([])
    setTotalCarrito(0)
    setContadorCarrito(0)
  }





  let retCarrito = (
    <Container className="mt-4 overflow-hidden">
      <h1>Carrito</h1>
      <img style={{
        marginInline: "auto",
        maxWidth: "400px",
        display: "block", 
        position: "relative",
        left: "-100px",
        marginTop: "20vh"}} src="/shopping.png" />
      <h2 style={{textAlign: "center"}} className="text-muted">Tu carrito esta vacio!</h2>
    </Container>
  );

  if (productosEnCarrito.length != 0) {
    setTotalCarrito(
      productosEnCarrito.reduce(
        (accumulator, item) => accumulator + item.price * item.cantidad,
        0
      )
    );

    retCarrito = (
      <Container className="mt-4">
        <div className="h1">Carrito</div>
        <CarritoItem/>
        <div className="my-5 mx-2 d-flex flex-row-reverse">
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => limpiarCarrito()}
          >
            <i className="bi bi-trash3" /> Vaciar carrito
          </Button>
        </div>

        <Card className="m-2 p-3">
          <Card.Body className="d-flex">
            <Card.Text className="h1"> Total</Card.Text>
            <Card.Text className="ms-auto me-1 h1">$ {totalCarrito.toFixed(2)}</Card.Text>
          </Card.Body>
          <Button className="m-2" variant="success" type="submit">
            Finalizar Compra
          </Button>
        </Card>
      </Container>
    );
  }

  return retCarrito;

  //muestro las cards
}

export default Carrito;
