import React from "react";
import { Col, Card } from "react-bootstrap";


function CardFeature({title, image, text }){

  return(
       <Col key={title} xs={12} sm={6} md={4} lg={3}>
         <Card
           className="h-100 text-center border hover-shadow transition-all"
           style={{ cursor: "pointer" }}
         >
         <div className="p-3">
           <Card.Title 
             className="fw-semibold text-secondary fs-6 text-truncate mb-2"
           >
             {title}
           </Card.Title>
 
           <div 
            className="d-flex justify-content-center align-items-center" 
            style={{ height: "180px" }}>
             <Card.Img
               src={image}
               alt={title}
               style={{objectFit: "contain",maxHeight: "100%",width: "auto"}}
             />
           </div>
             <Card.Text 
              className="mt-3 text-muted small"
             >
              {text}
             </Card.Text>
         </div>
        </Card>
      </Col>
  )
}

export default CardFeature