import React, { useState } from "react";
import { Button, Card, Col, Container, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import ProductSpecs from "../components/ProductSpecs";
import PurchaseSuccessModal from "../components/PurchaseSuccessModal";
import { useWindowsWidth } from "../components/useWindowSize";
import { useCarrito } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductContext";


function ProductDetails(){

    const width = useWindowsWidth()
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false)

    const name = decodeURIComponent(useParams().name) 

    const {limpiarCarrito} = useCarrito()
    const { products } = useProducts()

    return (
        <Container className="mt-2 pt-2 bg-white rounded">
        <>
        {products.map((item) => ( 
            name != item.title ? '' :
            <div key={item.id} className="m-2">
            <Link className='text-decoration-none fw-bold' to='/productos'> Volver</Link> 
            <span className="mx-2 fw-bold"> | </span>
            <Link className='text-decoration-none text-capitalize' 
              to={`/productos/category/${item.category}`}>
               {item.category}
            </Link>
              <Row className="g-0" md={4}>
                <Col className="col-md-7 col-sm-12">
                    <div className="w-100 overflow-hidden">
                      <img className="mx-auto d-block" src={item.thumbnail} />
                    </div>
                </Col>

                <Col style={{top: '55px'}} className={`col-md-5 col-12 
                    ${width >= 768 ? "sticky-top" : ""}`}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <img className="mb-2" src={`/rating${Math.round(item.rating)}.png`} />
                    <Card.Text className="h3">
                      $ {(item.price).toFixed(2)}
                    </Card.Text>
                    <Card.Text className="text-secondary">
                      Disponible: {item.stock}
                    </Card.Text>
                    <Card.Text className="text-secondary mb-3">
                      <i class="bi bi-truck"></i>  {item.shippingInformation}
                    </Card.Text>
                  </Card.Body>
                  <InputGroup className="w-100 align-items-center gap">
                  <Button 
                    className="m-2 rounded flex-fill" variant="primary" type="submit"
                    onClick={() => setModalShow(true)}
                  >
                      Comprar ahora
                  </Button> 
                  <AddToCartButton product={item}/>
                  <PurchaseSuccessModal 
                    show={modalShow} 
                    onHide={() =>{ setModalShow(false); limpiarCarrito() }}
                  />
                  </InputGroup>
  

                  </Card>
                </Col>
                

                <Col className="col-md-7 col-sm-12 m-3 mt-5 mx-0" >
                   <Col className="col-md-11" >
                      <div className="h3 mb-5">Características del producto</div>
                      <ProductSpecs producto={item} />              
                   </Col>
                </Col >
                <Col className="col-md-7 col-12 m-3 mx-0" >
                   <Col className="col-md-11" >
                      <div className="h3 mb-5">Descripcion</div>
                      <p>{item.description}</p>
                   </Col>
                </Col >
                <Col className="col-md-7 col-12 m-3 mx-0" >
                   <Col className="col-md-11" >
                      <div className="h3 mb-5">Opiniones</div>
                      {item.reviews.map(review => 
                        <Card key={item.id} className="m-2 overflow-hidden">
                        <div className="d-flex" md={4}>
                          <Card.Img  src="/user.png"
                                style={{scale: "0.8",
                                  height: "66px",
                                  width: "66px",
                                  margin: "10px"}}
                          />
                          <Card.Body>
                            <img src={`/rating${review.rating}.png`}/>
                            <Card.Text className="text-truncate">{review.comment}</Card.Text>
                          </Card.Body>
                        </div>
                      </Card>
                      )}
                      
                   </Col>
                </Col >
                </Row>

            </div>
          ))}
        </>
        </Container>
      );
}

export default ProductDetails