import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
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
    window.scrollTo(0, 0);
  }, []);


  return (
  <>
     {/** Home Banner */}

    <HeroBanner image={Img3} variant="white">
      <h1> Bienvenido a la Aplicacion </h1>
      <h1> de <b>Simple SHOP</b> </h1>
      <p>Una tienda original c-:</p>    
    </HeroBanner>

    {/** Features */}

    <div className="py-3 bg-gradient-0">
      <Container>
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
   <Container>

      {/** Product Ilands */}

      <Row className="my-3 mx-0 py-3 mb-3">
        <ProductSection filterFn={(p)=> p.category == "beauty"} count={4}>
          <p className="pb-0 m-0 fs-4 fw-medium">Lo mas visto</p>
          <Link to={'/productos'} className="text-decoration-none fw-bold">ver mas</Link>
        </ProductSection>
      </Row>
  

      <div className="row g-3"> 
       <div className="col-lg-4 col-md-12">
         <ProductSection filterFn={(p)=> p.category === "beauty"} count={1}>
           <p className="pb-0 m-0 fs-4 fw-medium">Oferton del día</p>
           <Link to="/productos" className="text-decoration-none fw-bold">ver más</Link>
         </ProductSection>
       </div>

       <div className="col-lg-8 col-md-12">
         <ProductSection filterFn={(p)=> p.category === "furniture"} count={3}>
           <p className="pb-0 m-0 fs-4 fw-medium">Para llevar más de uno</p>
           <Link to="/productos" className="text-decoration-none fw-bold">ver más</Link>
         </ProductSection>
      </div>
     </div>

      
      {/** Carousels  */}

  <Row className="my-3 mx-0 py-3 mb-3">
    <ProductCarousel filterFn={(p)=> p.category == "beauty"} col={3} >
      <h3 className="pb-0 m-0 fs-4 fw-medium">Con envio gratis</h3>
      <Link to={'/productos/category/groceries'} 
        className="text-decoration-none fw-bold">
        ver mas
      </Link>  
    </ProductCarousel>
  </Row>

  <Row className="my-3 mx-0  py-3 mb-3">
    <ProductCarousel filterFn={(p)=> p.discountPercentage >= 12} col={4}>
      <h3 className="pb-0 m-0 fs-4 fw-medium">Ofertas</h3>
      <Link to={'/productos/category/groceries'} 
        className="text-decoration-none fw-bold">
        ver mas
      </Link>  
    </ProductCarousel>
  </Row>

  
  {/** Card Promos */}

  <Row className="my-3 gap-3 mx-0 py-3 mb-3">
    <CardPromo Img={Img1} variant="primary" to={'/products'} cta="comprar ahora">
        <p className="mb-1">6 cuotas sin interés</p>
        <p className="h5 fw-bold mb-1">HASTA 40% OFF EN</p>
        <p className="h5 fw-bold">PERFUMES Y BELLEZA</p>
    </CardPromo>
    <CardPromo Img={Img2} variant="success" to={'/products'} cta="ver ofertas">
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
