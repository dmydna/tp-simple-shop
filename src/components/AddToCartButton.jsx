import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCarrito } from "../contexts/CartContext";



function AddToCartButton({product, variant='success'}){

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

export default AddToCartButton;