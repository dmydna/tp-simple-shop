import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Products({ products, onAgregarAlCarrito }) {


  // Agregar al Carrito, actualiza stock e incrementa producto en el Carrito

  return (

    <Container className='mt-4'>
    <h1>Productos</h1>
    <Row>
      {products.map(product=>(
        <Col  className='d-flex flex-column' key={product.id} md={4}>
          <Card className="row m-2">
          <Card.Img src={product.thumbnail}/>
            <Card.Body>
              <Card.Title style={{ height: '2.50rem'}} >{product.title}</Card.Title>
                <Card.Text>
                    <h1 className='font-weight-bold'>$ {product.price || 'N/A'}</h1>
                </Card.Text>
                <Card.Text>
                    <strong className='text-secondary'>stock: {product.stock || 'N/A'}</strong>
                </Card.Text>
            </Card.Body>
          </Card>
          <Button onClick={()=>{onAgregarAlCarrito(product)}} className='mx-2 my-2 fw-bold' variant="success" type="submit">Agregar al Carrito</Button>
        </Col>
      ))}
    </Row>
   </Container>
  );
}

export default Products;
