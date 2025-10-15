import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CardReview from "../components/CardReviews";
import ProductBuyCard from "../components/ProductBuyCard";
import ProductSpecs from "../components/ProductSpecs";
import { useProducts } from "../contexts/ProductContext";


function ProductDetails(){
  
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

    const name = decodeURIComponent(useParams().name) 
    const { products } = useProducts()

    return (
        <Container fluid="xl" className="bg-white rounded mt-2 pt-2">
        <>
        {products.map((p) => ( 
            name != p.title ? 
            '' :
              <Row className="g-3"  key={p.id}>
                {/**Breadcrumb */}
                <Col className="mb-5" xs={12}>
                    <Link className='text-decoration-none fw-bold' to='/productos'> Volver</Link> 
                   <span className="fw-bold mx-2"> | </span>
                    <Link className='text-decoration-none text-capitalize' 
                     to={`/productos/category/${p.category}`}>
                      {p.category}
                    </Link>
                </Col>

               {/**Product Image */}
                <Col sm={12} md={7}>
                    <div className="w-100">
                      <img className="d-block mx-auto" src={p.thumbnail} />
                    </div>
                </Col>

               {/**Buy Card */}
                <Col style={{top: '55px'}} className="sticky-md-bottom" xs={12} md={5}>
                   <ProductBuyCard
                     id={p.id}
                     title={p.title}
                     rating={p.rating}
                     ship={p.shippingInformation}
                     stock={p.stock}
                     price={p.price}
                   />
                </Col>
                
                {/**Product Specs */}
                <Col className="m-3 mt-5 mx-0" sm={12} md={7}>
                   <Col md={12}>
                      <ProductSpecs producto={p} >
                         <div className="h3 mb-5">Características del producto</div>
                      </ProductSpecs>              
                   </Col>
                </Col >

                {/**Product Description */}
                <Col className="m-3 mx-0" xs={12} md={7}  >
                   <Col md={12} >
                      <div className="h3 mb-5">Descripcion</div>
                      <p>{p.description}</p>
                   </Col>
                </Col >

                {/**Product Reviews */}
                <Col className="m-3 mx-0" xs={12} md={7}>
                   <Col md={12} >
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
          ))}
        </>
        </Container>
      );
}

export default ProductDetails