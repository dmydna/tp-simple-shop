import React, { useEffect, useState }  from 'react';
import { Container, Form, Button, Nav, NavDropdown, Col, Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import { useLocation } from 'react-router-dom';
import MobileMenuDos from '../components/MobileMenuDos';


function Contact() {


  useEffect(() => {
    const scrollX = (document.body.scrollWidth - window.innerWidth) / 2;
    const scrollY = (document.body.scrollHeight - window.innerHeight) / 2;
    window.scrollTo({top: 0});
  }, []);


  return (
    <Container fluid="xl">
     <Row>
      <ContactForm className={'bg-light rounded p-5 mx-auto'} style={{maxWidth: 500}}>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 m-0">
            Contacto
          </h1>
        </div>
      </ContactForm>
     </Row>
    </Container>
  );
}

export default Contact;
