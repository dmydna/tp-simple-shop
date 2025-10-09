import React from "react";
import { Container, Row } from "react-bootstrap";

function HeroBanner({image, children, variant}){

   const bgColor = `bg-${!variant ? 'white' : variant}`
   const textColor = `text-${variant && variant === 'white' || variant === 'light' ? 'dark' : 'light'}`

    return(
        <Container className={`py-3 ${bgColor}`}>
        <Row className={`${bgColor}`}>
          <div className="p-md-5 p-2 col-lg-3 col-md-4 col-sm-6 col-12 order-md-2">
            <img  className="d-block mx-auto" width={130} src={image} alt="" />
          </div>
          <div className={`col-lg-9 col-md-4 col-sm-6 col-12 order-md-1
          p-5 ${textColor}`}>
                {children}
          </div>

        </Row>
      </Container> 
    )
}

export default HeroBanner