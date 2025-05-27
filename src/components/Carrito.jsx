import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


function Carrito({productosCarrito}){

    return(
    //muestro las cards
    <Container className='mt-4'>
    <h1>Carrito</h1>
      {productosCarrito.map(item=>(
          <Card className="m-2">
          <Row className='g-0' key={item.producto.id} md={4}>
          <Col className='col-md-4'>
          <Card.Img src={item.producto.thumbnail}/>
          </Col>
          <Col className='col-md-4'>
            <Card.Body>
              <Card.Title>{item.producto.title}</Card.Title>
                <Card.Text>
                    <h1 className='font-weight-bold'>{
                    (item.producto.price * item.cantidad).toFixed(2)} USD</h1>
                </Card.Text>
                <Card.Text>
                    <strong className='text-secondary'>Cantidad: {item.cantidad || 'N/A'}</strong>
                </Card.Text>
            </Card.Body>
            <Button className='mx-2' variant="success" type="submit">Comprar</Button>
          </Col>
          </Row>
          </Card>


      ))}
   </Container>    

    )

}


export default Carrito;