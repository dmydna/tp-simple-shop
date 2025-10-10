import React, { useEffect, useState }  from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import { useLocation } from 'react-router-dom';

function Contact() {

  useEffect(() => {
    const scrollX = (document.body.scrollWidth - window.innerWidth) / 2;
    const scrollY = (document.body.scrollHeight - window.innerHeight) / 2;
    window.scrollTo(scrollX, scrollY);
  }, []);

  return (
    <ContactForm className={'bg-light rounded p-5'} style={{maxWidth: 500, minWidth:400}}>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 m-0">Contacto</h1>
      </div>
    </ContactForm>
  );
}

export default Contact;
