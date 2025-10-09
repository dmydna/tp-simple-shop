import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CardReview from "../components/CardReviews";
import ProductBuyCard from "../components/ProductBuyCard";
import ProductSpecs from "../components/ProductSpecs";
import { useProducts } from "../contexts/ProductContext";


function ProductDetails(){
  


    const name = decodeURIComponent(useParams().name) 
    const { products } = useProducts()

    return (
        <Container className="mt-2 pt-2 bg-white rounded">
        <>
        {products.map((p) => ( 
            name != p.title ? 
            '' :
            <div key={p.id} className="m-2">
              <Link className='text-decoration-none fw-bold' to='/productos'> Volver</Link> 
              <span className="mx-2 fw-bold"> | </span>
              <Link className='text-decoration-none text-capitalize' 
                to={`/productos/category/${p.category}`}>
                 {p.category}
              </Link>
              <Row className="g-0" md={4}>
                <Col className="col-md-7 col-sm-12">
                    <div className="w-100 overflow-hidden">
                      <img className="mx-auto d-block" src={p.thumbnail} />
                    </div>
                </Col>

                <Col style={{top: '55px'}} className="col-md-5 col-12 sticky-md-bottom">

                <ProductBuyCard
                  id={p.id}
                  title={p.title}
                  rating={p.rating}
                  ship={p.shippingInformation}
                  stock={p.stock}
                  price={p.price}
                />
                </Col>
                

                <Col className="col-md-7 col-sm-12 m-3 mt-5 mx-0" >
                   <Col className="col-md-11" >
                      <div className="h3 mb-5">Características del producto</div>
                      <ProductSpecs producto={p} />              
                   </Col>
                </Col >
                <Col className="col-md-7 col-12 m-3 mx-0" >
                   <Col className="col-md-11" >
                      <div className="h3 mb-5">Descripcion</div>
                      <p>{p.description}</p>
                   </Col>
                </Col >
                <Col className="col-md-7 col-12 m-3 mx-0" >
                   <Col className="col-md-11" >
                      <div className="h3 mb-5">Opiniones</div>
                      {p.reviews.map(r => 
                          <CardReview
                            id={r.id}
                            comment={r.comment}
                            rating={r.rating}
                            date={r.date}
                          />
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