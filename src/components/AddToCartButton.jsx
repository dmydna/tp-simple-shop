import React, { useMemo } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductContext";



function AddToCartButton({id, variant='success', children}){

    const { cartItems, addToCart} = useCart()

    const {products} = useProducts()

    const [product] = useMemo(()=>{
      return products.filter((p)=> {
        console.log(p.id == id ? p : '')
        return p.id == id
      })
    },[products]) 

    const handleAddToCart = () => {
      toast.success("Producto agregado al carrito!");
    };

    return (
      <>
       <Button
          onClick={ () => { product && addToCart(product); handleAddToCart(); } }
          className="m-2 flex-fill rounded text-truncate"
          variant={variant}
          type="submit"
          style={{cursor: "pointer"}}
        > 
          {cartItems.map((item)=> 
            item.id === product.id && item.cantidad != 0 ?
            <div className="position-relative d-inline-block me-3">
            <span className={`rounded-circle badge bg-white text-success
              px-${item.cantidad < 10 ? 2 : 1}`}
            >
              {item.cantidad}
            </span> 
            </div> : '' 
          )}
        {children ? children : 'Agregar al Carrito' }
       </Button>
      <ToastContainer />
      </>
    )
}

export default AddToCartButton;