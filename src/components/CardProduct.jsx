import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

function CardProduct({title, image ,price, stock, id, children, className, cols}){


    return(
        <Col className={`d-flex flex-column 
          ${cols ? cols : 'col-lg-3 col-md-4 col-sm-6 col-12'}`}
        >
           <Card className={`row m-2 text-decoration-none ${className}`}>
              <Link 
                className="text-decoration-none text-reset"
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
                    className={`fs-6 fw-semibold mb-2 text-truncate-2 hover-link`}
                    style={{
                      height: "3.2rem", 
                      overflow: "hidden", 
                      textDecoration: "none", 
                      fontWeight: "bold" 
                    }}
                >
                   {title}
                </Card.Title>
                <Card.Text className="h4 fw-bold text-success mb-1">
                  $ {price || "N/A"}
                </Card.Text>
                <Card.Text className="small fw-medium text-secondary">
                  stock: {stock ?? 0}
                </Card.Text>
              </Card.Body>
              </Link>
              <div className="p-2 d-flex">
                {children}
              </div>
            </Card>
        </Col>
    )
}

export default CardProduct