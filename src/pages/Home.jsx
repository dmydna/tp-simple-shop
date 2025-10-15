import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import CardPromo from "../components/CardPromo";
import ProductCarousel from "../components/ProductCarousel";
import ProductSection from "../components/ProductSection";
import CardFeature from "../components/CardFeature";

import Img1 from "../assets/lipstick.png";
import Img2 from "../assets/dressing-table.png";
import Img3 from "../assets/grocery-basket.gif";
import Img4 from '../assets/open-store.png';
import Img5 from "../assets/purchasing.png"
import Img6 from "../assets/new-product.png"
import Img7 from "../assets/gift-box.png"
import Img8 from "../assets/discount.png"
import Img9 from "../assets/customer-service.png"
import Img10 from "../assets/online-store.png"
import Img11 from "../assets/paper-bag.png"

function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);


  return (
  <>
     {/** Home Banner */}

    <HeroBanner image={Img3} variant="white">
      <h1> Bienvenido a la Aplicacion </h1>
      <h1> de <b>Simple SHOP</b> </h1>
      <div className="d-flex align-items-center gap-2">
        <p>Una tienda original</p>
        <p style={{ fontFamily: "'Noto Emoji', sans-serif", fontSize: "1.5rem"}}> 😉 </p>    
      </div>
      
    </HeroBanner>

    {/** Features */}

    <div className="bg-gradient-0">
      <Container fluid="xl">
       <Row className="g-4 py-3 mb-3">
          <CardFeature
            title='Compra Protegida'
            image= {Img5} 
            text='Podes devolver tu compra gratis'
          />
          <CardFeature
            title='Cupones'
            image={Img8} 
            text='Descubri los mejores descuentos'
          />
          <CardFeature
            title='Envios Gratis'
            image= {Img6} 
            text='Podes devolver tu compra gratis'
          />
          <CardFeature
            title='Tiendas oficiales'
            image={Img4} 
            text='Encontra tus marcas preferidas'
          />
       </Row>
     </Container>
   </div>
   <Container fluid="xl">

      {/** Product Ilands */}

      <Row className="g-0">
        <ProductSection className="border p-4 my-3" filterFn={(p)=> p.category == "beauty"} count={4}>
          <p className="fs-4 fw-medium pb-0 m-0">Lo mas visto</p>
          <Link to={'/productos'} className="text-decoration-none fw-bold">ver mas</Link>
        </ProductSection>
      </Row>
  

      <Row className="g-0"> 
      <Col className="p-0 my-3" md={12} lg={4}>
         <ProductSection className="border p-4 m-0 me-lg-3" filterFn={(p)=> p.category === "beauty"} count={1}>
           <p className="fs-4 fw-medium pb-0 m-0 ">Oferton del día</p>
           <Link to="/productos" className="text-decoration-none fw-bold">ver más</Link>
         </ProductSection>
       </Col>

       <Col className="p-0 my-3" md={12} lg={8}>
         <ProductSection className="border p-4" filterFn={(p)=> p.category === "furniture"} count={3}>
           <p className="fs-4 fw-medium pb-0 m-0 ">Para llevar más de uno</p>
           <Link to="/productos" className="text-decoration-none fw-bold">ver más</Link>
         </ProductSection>
       </Col>

     </Row>

      
      {/** Carousels  */}

  <Row className="g-0">
    <ProductCarousel className="border mx-0 my-3 p-4" filterFn={(p)=> p.category == "beauty"} col={3} >
       <h3 className="fs-4 fw-medium pb-0 m-0 ">Con envio gratis</h3>
       <Link to={'/productos/category/groceries'} 
         className="text-decoration-none fw-bold">
         Ver mas
       </Link>  
    </ProductCarousel>
  </Row>

  <Row className="g-0">
    <ProductCarousel className="border mx-0 my-3 p-4" filterFn={(p)=> p.discountPercentage >= 12} col={4}>
      <h3 className="fs-4 fw-medium pb-0 m-0 ">Ofertas</h3>
      <Link to={'/productos/category/groceries'} 
        className="text-decoration-none fw-bold">
        ver mas
      </Link>  
    </ProductCarousel>
  </Row>

  
  {/** Card Promos */}

  <Row className="g-0">
    <CardPromo className="my-3 me-md-1 me-0" Img={Img1} variant="primary" to={'/productos/category/beauty'} cta="comprar ahora">
        <p className="mb-1">6 cuotas sin interés</p>
        <p className="h5 fw-bold mb-1">HASTA 40% OFF EN</p>
        <p className="h5 fw-bold">PERFUMES Y BELLEZA</p>
    </CardPromo>
    <CardPromo className="my-3 ms-md-1 ms-0" Img={Img2} variant="success" to={'/productos/category/furniture'} cta="ver ofertas">
       <p className="mb-1">6 cuotas sin interés</p>
       <p className="h5 fw-bold mb-1">2X1 EN ARTICULOS</p>
       <p className="h5 fw-bold">PARA EL HOGAR</p>
    </CardPromo>
  </Row>


    </Container>
    </>
  );
}

export default Home;
