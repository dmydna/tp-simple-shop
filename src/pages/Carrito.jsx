import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";
import CantidadInput from "../components/CantidadInput";

function Carrito({ setCarritoTotal, carritoTotal, limpiarCarrito, productosCarrito, incProductoCarrito, decProductoCarrito, limpiarProductoCarrito }) {



  let retCarrito = (
    <Container className="mt-4">
      <h1>Carrito</h1>
      <h2 className="text-muted">Tu carrito esta vacio!</h2>
    </Container>
  );

  if (productosCarrito.length != 0) {

    setCarritoTotal(productosCarrito.reduce(
     (accumulator, item) => accumulator + item.price * item.cantidad, 
    0))

    retCarrito = (
      <Container className="mt-4">
        <h1>Carrito</h1>
        {productosCarrito.map((item) => (
          <Card className="m-2">
            <Row className="g-0" key={item.id} md={4}>
              <Col className="col-md-2">
                <Card.Img src={item.thumbnail} />
              </Col>
              <Col className="col-md-4">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <h2 className="font-weight-bold">
                      $ {(item.price * item.cantidad).toFixed(2)}
                    </h2>
                  </Card.Text>
                  <Card.Text>
                    <strong className="text-secondary">
                      Disponible: {item.stock - item.cantidad || "N/A"}
                    </strong>
                  </Card.Text>
                  <CantidadInput 
                  decProductoCarrito={decProductoCarrito} 
                  incProductoCarrito={incProductoCarrito}  
                  productosCarrito={productosCarrito}
                  limpiarProductoCarrito = {limpiarProductoCarrito}
                  producto={item}></CantidadInput>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
        <div className="my-5 mx-2 d-flex flex-row-reverse">
        <Button type="button" className="btn btn-danger" onClick={ ()=> limpiarCarrito()}>
          Vaciar carrito
        </Button>
        </div>

        <Card className="m-2 p-3">
          <Card.Text className="d-flex">
            <h1 className="font-weight-bold"> Total</h1>
            <h1 className="ms-auto me-1">$ {carritoTotal.toFixed(2)}</h1>
          </Card.Text>
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
