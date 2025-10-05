import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";

import Contact from "../pages/Contact";

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
        <Contact showModal={show} onHideModal={onHide} />
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;