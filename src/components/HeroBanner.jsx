import React from "react";
import { Container, Row } from "react-bootstrap";

function HeroBanner({image, children, variant}){

   const bgColor = `bg-${!variant ? 'white' : variant}`
   const textColor = `text-${variant && variant === 'white' || variant === 'light' ? 'dark' : 'light'}`

    return(
        <Container className={`p-5 ${bgColor}`}>
        <div className={`${bgColor} d-flex justify-content-between
        flex-wrap gap-5`}>
        {/* col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 order-lg-2 */}
          <div className="order-md-2 flex-fill flex-md-grow-0">
            <img  className="d-block mx-auto" width={130} src={image} alt="" />
          </div>
          <div 
          // col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 order-lg-1
            className={`order-md-1 flex-fill pt-md-3 pt-0  ${textColor}`}>
                {children}
          </div>

        </div>
      </Container> 
    )
}

export default HeroBanner