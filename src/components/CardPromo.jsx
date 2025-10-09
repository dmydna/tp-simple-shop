import React, { Children } from "react";
import { Col } from "react-bootstrap";
import LinkArrow from "./LinkArrow";


function CardPromo({Img, children, variant , to, cta }){

    return(
      <Col sm={12} md
      className="d-flex flex-column flex-md-row align-items-stretch border rounded overflow-hidden p-0 shadow-sm"
     >
       <div className="col-md-6 bg-light d-flex align-items-center justify-content-center p-5">
         <img src={Img}
           className="img-fluid rounded"
           style={{ maxHeight: "220px", objectFit: "contain" }}
         />
       </div>
   
       <div className={`col-md-6 bg-${variant} text-white d-flex flex-column justify-content-center flex-fill p-4`}>
         <div>
            {children}
         </div>
   
         <div className="d-flex align-items-center mt-3 fw-semibold">
           <LinkArrow to={to}>
             {cta}
           </LinkArrow>
         </div>
       </div>
     </Col>
    )
}


export default CardPromo