import React from "react";
import { Button } from "react-bootstrap";

function BuyNowButton({handle, variant, children, className}){


    return(
        <Button
          className={`rounded flex-fill ${className}`}
          variant={variant}
          type="submit"
          onClick={handle}
        >
         {children ? children : 'Comprar ahora' }
        </Button>
    )
}

export default BuyNowButton