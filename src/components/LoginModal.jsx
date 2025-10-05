import React, { useContext, useState } from "react";
import { Button, Modal,Card, Container } from "react-bootstrap";


import Login from "../pages/Login";



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
        <Login showModal={show} onHideModal={onHide} />
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;