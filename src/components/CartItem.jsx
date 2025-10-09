import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CarritoInput from "./CartInput";

function CarritoItem(){

    const cardItemStyle = { borderLeft: "0", borderRight: "0", borderTop: "0" }

    const {cartItems} = useCart()

    const cardLinkStyle = { overflow: "hidden"}
    return (
        <>
        {cartItems.map((item, index) => (
            <Card style={cardItemStyle} key={item.id} className="my-2 border-0">
              <Row className="g-0" md={4}>
                <Col className="col-md-4">
                  <Card.Img 
                   style={{ objectFit: 'contain', height: 160 }}
                   src={item.thumbnail} />
                </Col>
                <Col className="col-md-6">
                  <Card.Body>
                    <Card.Title as={Link} style={cardLinkStyle} 
                    className="d-block"
                    to={"../productos/details/" + encodeURIComponent(item.title)} >
                      {item.title}
                    </Card.Title>
                    <Card.Text className="h4">
                      $ {(item.price).toFixed(2)}
                    </Card.Text>
                    <Card.Text className="text-secondary">
                      Disponible: {item.stock - item.cantidad || 0}
                    </Card.Text>
                    <CarritoInput
                      producto={item}
                    />
                  </Card.Body>
                </Col>
              </Row>
              <hr className={`${index ==  cartItems.length - 1 ? 'd-none' : ''}`}/>
            </Card>

          ))}
        </>
        
    )
}

export default CarritoItem