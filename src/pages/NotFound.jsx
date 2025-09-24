import React from "react";
import { Button, Card, Container } from "react-bootstrap";

export default function NotFound(){

    return (
      <Container style={{height: "80vh"}} 
    className="mt-4 overflow-hidden container d-flex row mx-auto align-items-center">
      <div>
      <img style={{
        marginInline: "auto",
        maxWidth: "400px",
        display: "block", 
        position: "relative",
      }} 
        src="/error.png" />
      </div>

      <h2 style={{textAlign: "center"}} className="text-muted fw-bolder">
        Pagina No Encontrada!
      </h2>
    </Container>
        
    )
}