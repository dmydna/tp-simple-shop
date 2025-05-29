import React from "react";
import {Button,Card,Container} from "react-bootstrap";
import CartItem from "./CartItem";

function Cart({ productosCarrito }) {

  const total = productosCarrito.reduce((accumulator, item) => {
    return accumulator + item.producto.price * item.cantidad;
  }, 0);

  return (
    productosCarrito.length == 0 ? 
      <Container className="mt-4">
        <h2 className="text-muted">Tu carrito esta vacio!</h2>
      </Container>
       : 
      <Container className="mt-4 p-0">
        {productosCarrito.map((item) => (
          <CartItem item={item}></CartItem>
        ))}
        <h2
          style={{ width: "200px" }}
          className="my-5 me-md-3 pb-5 ms-auto text-secondary"
          type="submit"
        >
         Vaciar carrito
        </h2>
        <Card className="m-2 p-3 sticky-bottom">
          <Card.Text className="d-flex">
            <p className="fw-bold fs-2"> Total</p>
            <p className="ms-auto me-1 fw-bold fs-2">$ {total.toFixed(2)}</p>
          </Card.Text>
          <Button className="m-2" variant="success" type="submit">
            Finalizar Compra
          </Button>
        </Card>
      </Container>
  )
}

export default Cart;
