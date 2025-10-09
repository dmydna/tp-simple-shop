import React from "react";
import { Container } from "react-bootstrap";

function HeroBanner({image, children, variant}){

    return(
        <div className={`py-3 bg-${!variant ? 'white' : variant}`}>
        <Container className="d-flex">
          <div className="p-5">
            <img width={130} src={image} alt="" />
          </div>
          <div className={`py-5 text-${variant && variant === 'white' 
                                     || variant === 'light' ? 'dark' : 'light'}`}>
                {children}
          </div>
        </Container>
      </div> 
    )
}

export default HeroBanner