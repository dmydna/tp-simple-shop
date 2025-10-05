import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HoverWrapper from "../contexts/HoverWrapper";
import { useCarrito } from "../contexts/CartContext";
import { Button } from "react-bootstrap";

function CartButton(){

    const navigate = useNavigate();
    const location = useLocation();

    const toggleRoute = () => { 
        location.pathname == '/carrito' ? 
        navigate(-1) || navigate('/') : navigate('/carrito')
      }

    const {contadorCarrito} = useCarrito()


    return(
        <HoverWrapper id="carrito-btn">
        {(isHovered) => (
         <Button 
         onClick={ toggleRoute } 
         className='fw-bold fs-3 d-flex' variant="outline-black">
            <i className={`bi bi-${ 
              isHovered && location.pathname == '/carrito' ?
              'x' : 'cart3'  }`}>
            </i>
            {contadorCarrito == 0 ? '' : 
            (isHovered && location.pathname == '/carrito' ?
                '' : 
            <span className={`position-absolute bg-dark rounded-circle`}
               style={{width:18, height:18}}>
              <p style={{zIndex: 999, fontSize: 13}} className="text-white">
                {contadorCarrito}
              </p>
            </span>  
            )}
        </Button>
        )}
      </HoverWrapper>
    )
}

export default CartButton;