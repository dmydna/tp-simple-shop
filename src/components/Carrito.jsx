import React from 'react';
import { Button, Card, Col, Container, Row, InputGroup, Form } from 'react-bootstrap';
import CantidadInput from './CantidadInput';

function Carrito({productosCarrito}){

  

  let retCarrito = (
    <Container className='mt-4'>
    <h1>Carrito</h1>
    <h2 className='text-muted'>Tu carrito esta vacio!</h2>
    </Container>
  )

    if(productosCarrito.length != 0){

      const total = productosCarrito.reduce((accumulator, item) => {
        return accumulator + (item.producto.price * item.cantidad);
      }, 0);

      retCarrito = (<Container className='mt-4'>

        <h1>Carrito</h1>
          {productosCarrito.map(item=>(
              
              <Card className="m-2">
              <Row className='g-0' key={item.producto.id} md={4}>
              <Col className='col-md-2'>
              <Card.Img src={item.producto.thumbnail}/>
              </Col>
              <Col className='col-md-4'>
                <Card.Body>
                  <Card.Title >{item.producto.title}</Card.Title>
                    <Card.Text>
                        <h1 className='font-weight-bold'>
                         $ {(item.producto.price * item.cantidad).toFixed(2)}
                        </h1>
                    </Card.Text>
                    <Card.Text>
                        <strong className='text-secondary'>Disponible: {item.producto.stock - item.cantidad || 'N/A'}</strong>
                    </Card.Text>
                    <CantidadInput cantidad={item.cantidad}></CantidadInput>
                </Card.Body>
              </Col>
              </Row>
              </Card>    
          ))}
          <h2
          style={{width: '200px'}} 
          className='my-5 me-md-3 pb-5 ms-auto text-secondary' type="submit">Vaciar carrito</h2>
          <Card className="m-2 p-3">
          <Card.Text className='d-flex'> 
            <h1 className='font-weight-bold'> Total</h1>
            <h1 className='ms-auto me-1'>$ {total.toFixed(2)}</h1>
          </Card.Text>
          <Button className='m-2' variant="success" type="submit">Finalizar Compra</Button>
          </Card>

       </Container>  
       )
    
    }




    return(
    
      retCarrito

    //muestro las cards
      

    )

}


export default Carrito;