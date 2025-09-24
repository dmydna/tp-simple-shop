import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useCarrito } from "../contexts/CarritoContext";

function CarritoCantidadBoton({ producto }) {

  const { eliminarProductoCarrito,
     decrementarProductoCarrito, 
     incrementarProductoCarrito,
     productosEnCarrito
  } = useCarrito();

  const [cantidad, setCantidad] = useState(!producto.cantidad ? 0 : producto.cantidad)


  const incCarrito = (producto)=>{
    setCantidad((prev)=> prev >= 0 && prev <= producto.stock ? 
    (!producto.cantidad ? prev : producto.cantidad) + 1 : 0 )
    if(producto.cantidad){
      incrementarProductoCarrito(producto);
    } 
  }

  const decCarrito = (producto)=>{
    setCantidad((prev)=> prev > 0 && prev <= producto.stock ?  
    (!producto.cantidad ? prev : producto.cantidad)  - 1 : 0 )
    if(producto.cantidad){
      decrementarProductoCarrito(producto);
    }

  }

  const elimItem = (producto) => {
    setCantidad(0)
    if(producto.cantidad || producto.cantidad == 0){
      eliminarProductoCarrito(producto)
    }
  }

  const actCarrito = (producto) =>{
     e.target.value > 0 && e.target.value <= producto.stock ? setCantidad(e.target.value ): (!producto.cantidad ? prev : producto.cantidad)
  }
  return (
    <InputGroup className="align-items-center mx-2" style={{ width: "160px" }}>
      <Button
        onClick={() => elimItem(producto)}
        variant="outline-secondary"
      >
        <i className="bi bi-trash3"></i>
      </Button>
      <Button
        onClick={() =>  decCarrito(producto) }
        variant="outline-secondary"
      >{" "}-{" "}
      </Button>
      <Form.Control
        type="text"
        value={cantidad}
        onInput={e => actCarrito(producto,e)}
        className="text-center"
      ></Form.Control>
      <Button
        onClick={() => incCarrito(producto)}
        variant="outline-secondary"
      >{" "}+{" "}
      </Button>
    </InputGroup>
  );
}

export default CarritoCantidadBoton;
