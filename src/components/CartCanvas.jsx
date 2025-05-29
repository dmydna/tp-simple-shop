import React from "react";
import {Offcanvas} from "react-bootstrap";
import Cart from "./Cart"

function CartCanvas({ productosCarrito, showCart, handleCloseCart }) {
    

  return (
    <Offcanvas style={{minWidth:'40vw'}} show={showCart} onHide={handleCloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
         <Cart productosCarrito={productosCarrito}></Cart>
      </Offcanvas.Body>
    </Offcanvas>
  );

}

export default CartCanvas;
