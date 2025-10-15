import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

function CardProduct({title, image ,price, stock, id, children, className, cols}){


    return(
        <Col className={`d-flex flex-column p-0
          ${cols ? cols : 'col-lg-3 col-md-4 col-sm-6 col-12'}`}
        >
           <Card className={`${className || 'm-2'}`}>
              <Link 
                className="text-decoration-none text-reset p-0"
               to={"/productos/details/" + encodeURIComponent(title)}
              >
              <Card.Img   src={image}
                    style={{ 
                      objectFit: 'contain', 
                      height: '180px', 
                      padding: "1rem" 
                    }}
              />
              <Card.Body>
                <Card.Title 
                    className={`text-truncate-2 hover-link mb-2 fs-6 fw-semibold `}
                    style={{
                      height: "3.2rem", 
                      overflow: "hidden", 
                      textDecoration: "none", 
                    }}
                >
                   {title}
                </Card.Title>
                <Card.Text className="fs-4 fw-bold text-success mb-1">
                  $ {price || "N/A"}
                </Card.Text>
                <Card.Text className="small fw-medium text-secondary">
                  stock: {stock ?? 0}
                </Card.Text>
              </Card.Body>
              </Link>
              <div className="d-flex p-2">
                {children}
              </div>
            </Card>
        </Col>
    )
}

export default CardProduct