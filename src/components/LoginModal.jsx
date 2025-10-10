import React, { useContext, useState } from "react";
import { Button, Modal,Card, Container } from "react-bootstrap";


import Login from "../pages/Login";
import LoginForm from "./LoginForm";



function LoginModal({show, onHide}) {

  return (
    <Modal
    show={show}
    onHide={onHide}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Body style={{ maxHeight: "calc(80vh)", overflowY: "auto", boxSizing: 'border-box' }}>
       <LoginForm style={{maxWidth: 400, minWidth:300}}>
         <div className="d-flex align-items-center justify-content-between mb-4">
           <h1 className="h3 m-0">Iniciar sesión</h1>
           <i onClick={() => onHide(false)} className="h3 bi bi-x m-0 hover-icon"></i> 
         </div>
       </LoginForm>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;