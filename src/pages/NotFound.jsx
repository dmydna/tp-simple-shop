import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import warningIMG from "/src/assets/404.png"

export default function NotFound(){

    return (
      <Container style={{height: "80vh"}} 
      className="py-5 mt-5 d-flex justify-content-center align-items-center">
     <div>
     <img style={{
       marginInline: "auto",
       maxWidth: "300px",
       display: "block", 
       position: "relative",
     }} 
       src={warningIMG} />
     <h4 className="text-muted fw-bolder m-4">
       Pagina no encontrada!
     </h4>
     <Button as={Link} to={'/productos'}  className="col w-100 col-md-2 p-2 h-2" variant="primary"> <i className="bi bi-arrow-left"></i><b className="mx-2">volver</b></Button>
     </div>
   </Container>
        
    )
}