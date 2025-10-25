import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

function CarritoInput({ producto, className }) {


  const { removeFromCart,
      decreaseCartItem, 
      increaseCartItem,
  } = useCart();

  const [cantidad, setCantidad] = useState(!producto.cantidad ? 0 : producto.cantidad)


  const incCarrito = (producto)=>{
    setCantidad((prev)=> prev >= 0 && prev <= producto.stock ? 
    (!producto.cantidad ? prev : producto.cantidad) + 1 : 0 )
    if(producto.cantidad){
      increaseCartItem(producto);
    } 
  }

  const decCarrito = (producto)=>{
    setCantidad((prev)=> prev > 0 && prev <= producto.stock ?  
    (!producto.cantidad ? prev : producto.cantidad)  - 1 : 0 )
    if(producto.cantidad){
      decreaseCartItem(producto);
    }

  }

  const elimItem = (producto) => {
    setCantidad(0)
    if(producto.cantidad || producto.cantidad == 0){
      removeFromCart(producto)
    }
  }

  const actCarrito = (producto) =>{
     e.target.value > 0 && e.target.value <= producto.stock ? setCantidad(e.target.value ): (!producto.cantidad ? prev : producto.cantidad)
  }
  return (
    <InputGroup className={`small align-items-center border border-3 border-dark rounded px-1`} style={{ maxWidth: "140px" }}>
      <Button
        className="btn p-1 border-0 me-4"
        onClick={() => elimItem(producto)}
        variant
      ><i className="bi bi-trash3"></i>
      </Button>
      <Button
        className="btn p-1 border-0"
        onClick={() =>  decCarrito(producto) }
        variant
      ><i class="bi bi-dash-lg"></i>
      </Button>
      <Form.Control
        type="text"
        value={cantidad}
        onInput={e => actCarrito(producto,e)}
        className="text-center no-focus p-0"
      ></Form.Control>
      <Button
        className="btn p-1 border-0"
        onClick={() => incCarrito(producto)}
        variant
      ><i class="bi bi-plus-lg"></i>
      </Button>
    </InputGroup>
  );
}

export default CarritoInput;
