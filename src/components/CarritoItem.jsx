import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import CarritoCantidad from "./CarritoCantidadBoton";
import { Link } from "react-router-dom";
import { useCarrito } from "../contexts/CarritoContext";

function CarritoItem(){

    const {productosEnCarrito, limpiarItemCarrito } = useCarrito()

    const cardLinkStyle = {height: "3.2rem", overflow: "hidden", textDecoration: "none", fontWeight: "bold"}
    return (
        <>
        {productosEnCarrito.map((item) => (
            <Card key={item.id} className="m-2">
              <Row className="g-0" md={4}>
                <Col className="col-md-2">
                  <Card.Img src={item.thumbnail} />
                </Col>
                <Col className="col-md-4">
                  <Card.Body>
                    <Card.Title as={Link} style={cardLinkStyle} 
                    className="d-block"
                    to={"../productos/details/" + encodeURIComponent(item.title)} >
                      {item.title}
                    </Card.Title>
                    <Card.Text className="h3">
                      $ {(item.price).toFixed(2)}
                    </Card.Text>
                    <Card.Text className="text-secondary">
                      Disponible: {item.stock - item.cantidad || 0}
                    </Card.Text>
                    <CarritoCantidad
                      producto={item}
                    />
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </>
        
    )
}

export default CarritoItem