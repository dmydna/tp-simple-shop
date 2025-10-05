import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCarrito } from "../contexts/CartContext";
import CarritoInput from "./CartInput";

function CarritoItem(){

    const cardItemStyle = { borderLeft: "0", borderRight: "0", borderTop: "0" }

    const {productosEnCarrito} = useCarrito()

    const cardLinkStyle = { overflow: "hidden"}
    return (
        <>
        {productosEnCarrito.map((item, index) => (
            <Card style={cardItemStyle} key={item.id} className="my-2 border-0">
              <Row className="g-0" md={4}>
                <Col className="col-md-4">
                  <Card.Img  src={item.thumbnail} />
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
              <hr className={`${index ==  productosEnCarrito.length - 1 ? 'd-none' : ''}`}/>
            </Card>

          ))}
        </>
        
    )
}

export default CarritoItem