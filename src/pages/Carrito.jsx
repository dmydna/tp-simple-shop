import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CantidadInput from "../components/CantidadInput";

function Carrito({
  setTotalCarrito,
  totalCarrito,
  limpiarCarrito,
  productosCarrito,
  incProductoCarrito,
  decProductoCarrito,
  limpiarProductoCarrito,
}) {
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

  if (productosCarrito.length != 0) {
    setTotalCarrito(
      productosCarrito.reduce(
        (accumulator, item) => accumulator + item.price * item.cantidad,
        0
      )
    );

    retCarrito = (
      <Container className="mt-4">
        <div className="h1">Carrito</div>
        {productosCarrito.map((item) => (
          <Card key={item.id}  className="m-2">
            <Row className="g-0" md={4}>
              <Col className="col-md-2">
                <Card.Img src={item.thumbnail} />
              </Col>
              <Col className="col-md-4">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="h1">
                    $ {(item.price).toFixed(2)}
                  </Card.Text>
                  <Card.Text className="text-secondary">
                    Disponible: {item.stock - item.cantidad || 0}
                  </Card.Text>
                  <CantidadInput
                    decProductoCarrito={decProductoCarrito}
                    incProductoCarrito={incProductoCarrito}
                    productosCarrito={productosCarrito}
                    limpiarProductoCarrito={limpiarProductoCarrito}
                    producto={item}
                  />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
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
