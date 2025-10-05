import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact({onHideModal}) {
  return (
    <Container  className="my-5" style={{maxWidth: 400, minWidth:300}}>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 m-0">Contacto</h1>
        {onHideModal ?
        <i onClick={() => onHideModal(false)} className="h3 bi bi-x m-0"></i> 
        : ''}
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="tu@email.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit"  className="w-100 my-2" >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
