import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarritoItem from "../components/CartItem";
import PurchaseSuccessModal from "../components/PurchaseSuccessModal";
import { useWindowsHeight } from "../components/useWindowSize";
import { useCarrito } from "../contexts/CartContext";
import emptyCaryImg from "/src/assets/empty-cart.png";


function Carrito() {

  const height = useWindowsHeight()

  const { limpiarCarrito, 
      setTotalCarrito, 
      totalCarrito,
      productosEnCarrito 
  } = useCarrito()

  const [modalShow, setModalShow] = useState(false)

  return( productosEnCarrito.length != 0 ? 
    <Container className="mt-4">
      <div className="h1">Carrito</div>

      <div style={
        height >= 1000 ? {height: "calc(100vh - 480px)", overflow: "auto"} : {} }>
      <CarritoItem/>
      </div>
        <div className="my-3 mx-2 d-flex flex-row-reverse">
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => limpiarCarrito()}
          >
            <i className="bi bi-trash3" /> Vaciar carrito
          </Button>
      </div>
      <Card className="m-2">
        <Card.Body className="d-flex">
          <Card.Text className="h3"> Total</Card.Text>
          <Card.Text className="h3 ms-auto me-1">$ {totalCarrito.toFixed(2)}</Card.Text>
        </Card.Body>
        <Button className="m-2" variant="primary" type="submit"
            onClick={()=>{setModalShow(true)}}
        >
          Finalizar Compra
        </Button>
      </Card>
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
