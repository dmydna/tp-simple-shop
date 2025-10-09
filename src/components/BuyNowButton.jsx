import React from "react";
import { Button } from "react-bootstrap";

function BuyNowButton({handle, variant, children}){


    return(
        <Button
          className="m-2 rounded flex-fill"
          variant={variant}
          type="submit"
          onClick={handle}
        >
         {children ? children : 'Comprar ahora' }
        </Button>
    )
}

export default BuyNowButton