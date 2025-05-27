import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Products({ products, onAgregarAlCarrito }) {


  return (
    //muestro las cards
    <Container className='mt-4'>
    <h1>Products</h1>
    <Row>
      {products.map(product=>(
        <Col  className='d-flex flex-column' key={product.id} md={4}>
          <Card className="row m-2">
          <Card.Img src={product.thumbnail}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <h1 className='font-weight-bold'>{product.price || 'N/A'} USD</h1>
                </Card.Text>
                <Card.Text>
                    <strong className='text-secondary'>stock: {product.stock || 'N/A'}</strong>
                </Card.Text>
            </Card.Body>
          </Card>
          <Button  className='mx-2' variant="success" type="submit">Comprar</Button>
          <Button onClick={()=>{onAgregarAlCarrito(product)}} className='mx-2 my-2' variant="muted" type="submit">Agregar al Carrito</Button>
        </Col>
      ))}
    </Row>
   </Container>
  );
}

export default Products;
