import React, { useState } from "react";
import { Button, Card, Col, Row, Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarritoItem from "../components/CartItem";
import PurchaseSuccessModal from "../components/PurchaseSuccessModal";
import { useWindowsHeight, useWindowsWidth } from "../components/useWindowSize";
import { useCarrito } from "../contexts/CartContext";
import emptyCaryImg from "/src/assets/empty-cart.png";


function Carrito() {

  const height = useWindowsHeight()
  const width = useWindowsWidth()

  const { limpiarCarrito, 
      setTotalCarrito, 
      totalCarrito,
      productosEnCarrito 
  } = useCarrito()

  const [modalShow, setModalShow] = useState(false)

  return( productosEnCarrito.length != 0 ? 
    <Container className="mt-4">
            <div className="h1 d-none">Carrito</div>
    <Row className="g-0" md={4}>
      <Col className="col-md-7 col-sm-12">
      <Card className="m-2 p-4">
      <div class="d-flex align-items-center justify-content-between">
        <p className="h5 pt-3 fw-bold">Mi carrito({productosEnCarrito.length})</p>
        <i onClick={() => limpiarCarrito()} style={{fontSize: "xx-large"}} class="bi bi-x"></i>
      </div>

      <hr/>
      <CarritoItem/>
      <div className="my-3 mx-2 d-flex flex-row-reverse d-none">
        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => limpiarCarrito()}
        >
          <i className="bi bi-trash3" /> Vaciar carrito
        </Button>
      </div>
      </Card>

      </Col>
      <Col className="col-md-5 col-12 ">
      <Card className="m-2 p-4" >
        <Card.Text className="h5 py-3 fw-bold text-secondary">
          Cupones
        </Card.Text>
        <InputGroup className="align-items-center">
        <Form.Control
           type="text"
           className="text-center"
        ></Form.Control>
          <Button
            variant="danger"
          >Ingresar
          </Button>
         </InputGroup>
      </Card>
      <Card style={{top: (width > 900 ? "55px" : 0)  }} 
         className={` sticky-md-top m-2 p-4`} >
        <Card.Text className="h5 py-2 fw-bold text-secondary">
          Tu pedido
        </Card.Text>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-2">
          <Card.Text className="text-secondary  m-0">
            Subtotal ({productosEnCarrito.length} productos)</Card.Text>
          <Card.Text className="fw-bold">
            ${totalCarrito.toFixed(2)}
          </Card.Text>
        </div>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-2">
          <Card.Text className="text-secondary m-0">Descuentos</Card.Text>
          <Card.Text className="fw-bold">
            $0
          </Card.Text>
        </div>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-2">
          <Card.Text className="text-secondary m-0">Envio</Card.Text>
          <Card.Text className="fw-bold">
            $10.30
          </Card.Text>
        </div>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-3 pb-4">
          <Card.Text className="h5 fw-bold m-0">Total</Card.Text>
          <Card.Text className="h5 fw-bold">
            ${totalCarrito.toFixed(2)}
          </Card.Text>
        </div>


        <Button variant="primary" type="submit"
            onClick={()=>{setModalShow(true)}}
        >
          Finalizar Compra
        </Button>
      </Card>
      </Col>
    </Row>


      <PurchaseSuccessModal 
        show={modalShow} 
        onHide={() =>{ setModalShow(false); limpiarCarrito() }}
      />
    </Container> :
  <Container style={{height: "80vh"}} 
     className="py-5 mt-5 d-flex justify-content-center align-items-center">
    <div>
    <img style={{
      marginInline: "auto",
      maxWidth: "300px",
      display: "block", 
      position: "relative",
    }} 
      src={emptyCaryImg} />
    <h3 className="text-muted fw-bolder m-4">
      Tu carrito esta vacio!
    </h3>
    <Button as={Link} to={'/productos'}  className="col w-100 col-md-2 p-2 " variant="danger"><i className="bi bi-house-door-fill"></i> <b className="mx-2"> ir a Comprar </b>   </Button>
    </div>
  </Container>
  )


  

  //muestro las cards
}

export default Carrito;
