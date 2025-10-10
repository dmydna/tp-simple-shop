import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";

import ContactForm from "./ContactForm";

function ContactModal({show, onHide}) {

  return (
    <Modal
    show={show}
    onHide={onHide}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Body className="p-0" style={{ maxHeight: "calc(82vh)", overflowY: "auto", boxSizing: 'border-box' }}>
      <ContactForm style={{maxWidth: 400, minWidth:300}}>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 m-0">Contacto</h1>
          <i onClick={() => onHide(false)} className="h3 bi bi-x m-0 hover-icon"></i> 
        </div>
      </ContactForm>

      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;