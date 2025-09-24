import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useCarrito } from "../contexts/CarritoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function CarritoAgregarBoton({product, variant='success'}){

    const { productosEnCarrito, agregarAlCarrito} = useCarrito()

    const handleAddToCart = () => {
      toast.success("Producto agregado al carrito!");
    };

    return (
      <>
       <Button
          onClick={ () => {agregarAlCarrito(product); handleAddToCart()} }
          className="m-2 fw-bold flex-fill rounded text-truncate"
          variant={variant}
          type="submit"
        > 
          {productosEnCarrito.map((item)=> 
            item.id === product.id && item.cantidad != 0 ?
            <div className="position-relative d-inline-block me-3">
            <span className={`rounded-circle badge bg-white text-success
              px-${item.cantidad < 10 ? 2 : 1}`}
            >
              {item.cantidad}
            </span> 
            </div> : '' 
          )}
        Agregar al Carrito
       </Button>
      <ToastContainer />
      </>
    )
}

export default CarritoAgregarBoton;