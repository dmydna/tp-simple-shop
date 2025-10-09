import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { HoverProvider } from "../contexts/HoverContext";
import HoverWrapper from "../contexts/HoverWrapper";

function CartButton(){

    const navigate = useNavigate();
    const location = useLocation();

    const toggleRoute = () => { 
        location.pathname == '/carrito' ? 
        navigate(-1) || navigate('/') : navigate('/carrito')
      }

    const {cartCount} = useCart()


    return(
      <HoverProvider>
        <HoverWrapper id="carrito-btn">
        {(isHovered) => (
         <Button 
         onClick={ toggleRoute } 
         className='fw-bold fs-3 d-flex' variant="outline-black">
            <i className={`bi bi-${ 
              isHovered && location.pathname == '/carrito' ?
              'x' : 'cart3'  }`}>
            </i>
            {cartCount == 0 ? '' : 
            (isHovered && location.pathname == '/carrito' ?
                '' : 
            <span className={`position-absolute bg-dark rounded-circle`}
               style={{width:18, height:18}}>
              <p style={{zIndex: 999, fontSize: 13}} className="text-white">
                {cartCount}
              </p>
            </span>  
            )}
        </Button>
        )}
        </HoverWrapper>
      </HoverProvider>
        
    )
}

export default CartButton;