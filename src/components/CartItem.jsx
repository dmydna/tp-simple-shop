import React from "react";
import {Card,Col,Row} from "react-bootstrap";
import CartInput from './CartInput';

function CartItem({item}){

    return(
<Card className="m-2">
  <Row className="g-0" key={item.producto.id} md={4}>
    <Col className="col-md-3">
      <Card.Img style={{maxWidth:'130px'}} src={item.producto.thumbnail} />
    </Col>
    <Col className="col-md-9">
      <Card.Body>
        <Card.Title>{item.producto.title}</Card.Title>
        <Card.Text className="text-secondary fw-bold">
          Disponible: {item.producto.stock - item.cantidad || "N/A"}
        </Card.Text>
        
        <Card.Text className="fw-bold fs-3">
          <Row className="justify-content-between">
            <Col className="order-2 order-md-1">
              <CartInput  cantidad={item.cantidad}></CartInput>
            </Col>
            <Col className="order-1 order-md-2 text-md-end">
              <p >$ {(item.producto.price * item.cantidad).toFixed(2)}</p>
            </Col>
          </Row>
          

        </Card.Text>
      </Card.Body>
    </Col>
  </Row>
</Card>)

}

export default CartItem;
