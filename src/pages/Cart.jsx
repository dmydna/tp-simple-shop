import React, { useMemo, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BuyNowButton from "../components/BuyNowButton";
import CartClearModal from "../components/CartClearModal";
import CartCupon from "../components/CartCupon";
import CarritoItem from "../components/CartItem";
import ProductBuyModal from "../components/ProductBuyModal";
import { useWindowsHeight, useWindowsWidth } from "../components/useWindowSize";
import { useCart } from "../contexts/CartContext";
import emptyCaryImg from "/src/assets/empty-cart.png";

function Carrito() {


  const height = useWindowsHeight()
  const width = useWindowsWidth()

  const { clearCart, 
      setTotalPrice, 
      totalPrice,
      cartItems 
  } = useCart()

  const[cuponCheck, setCuponCheck] = useState(false)

  const [modalShow, setModalShow] = useState(false)
  const [showClearCart, onHideClearCart] = useState(false)

  const Order = useMemo(() => {
    const descuento = cuponCheck ? 5.0 : 0;
    const envio = 10.30;
    return {
      envio: envio,
      descuento: descuento,
      subtotal: totalPrice,
      total: totalPrice + envio - descuento
    };
  }, [cuponCheck, totalPrice]);



  return( cartItems.length != 0 ? 
    <Container className="mt-4">
      <div className="h1 d-none">Carrito</div>
    <Row className="g-0" md={4}>
      <Col className="col-md-7 col-sm-12">
      <Card className="m-2 p-4">
      <div class="d-flex align-items-center justify-content-between">
        <p className="h5 pt-3 fw-bold">Mi carrito({cartItems.length})</p>
        <i onClick={() => onHideClearCart(true)} 
        style={{fontSize: "xx-large"}} class="bi bi-x hover-icon"></i>
      </div>

      <CartClearModal  show={showClearCart}  onHide={onHideClearCart}  
      handle={()=>  clearCart()  } />

      <hr/>
      <CarritoItem/>
      <div className="my-3 mx-2 d-flex flex-row-reverse d-none">
        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => clearCart()}
        >
          <i className="bi bi-trash3" /> Vaciar carrito
        </Button>
      </div>
      </Card>

      </Col>
      <Col className="col-md-5 col-12 ">
      <CartCupon title={'Carrito'} check={cuponCheck} onCheck={setCuponCheck} />
      <Card style={{top: (width > 900 ? "55px" : 0)  }} 
         className={` sticky-md-top m-2 p-4`} >
        <Card.Text className="h5 py-2 fw-bold text-secondary">
          Tu pedido
        </Card.Text>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-2">
          <Card.Text className="text-secondary  m-0">
            Subtotal ({cartItems.length} productos)</Card.Text>
          <Card.Text className="fw-bold">
            ${totalPrice.toFixed(2)}
          </Card.Text>
        </div>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-2">
          <Card.Text className="text-secondary m-0">Descuento {cuponCheck && '(1 cupon)'} </Card.Text>
          <Card.Text className="fw-bold">
            ${Order.descuento}
          </Card.Text>
        </div>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-2">
          <Card.Text className="text-secondary m-0">Envio</Card.Text>
          <Card.Text className="fw-bold">
            ${Order.envio}
          </Card.Text>
        </div>
        <hr/>
        <div className="d-flex align-items-center justify-content-between py-3 pb-4">
          <Card.Text className="h5 fw-bold m-0">Total</Card.Text>
          <Card.Text className="h5 fw-bold">
            ${Order.total.toFixed(2)}
          </Card.Text>
        </div>


        <BuyNowButton
          handle={()=>{setModalShow(true)}}
          variant='primary'
        >
         Finalizar Compra
        </BuyNowButton>
      </Card>
      </Col>
      <ToastContainer />
    </Row>


      <ProductBuyModal 
        show={modalShow} 
        onHide={() =>{ setModalShow(false); clearCart() }}
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
