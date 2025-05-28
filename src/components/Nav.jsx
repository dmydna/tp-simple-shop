import React from 'react';
import { Nav as BootstrapNav, Navbar, Container } from 'react-bootstrap';


function Nav({ items, onSeleccion }) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav className="me-auto w-100">
          {items.map((item) => (
  
            <BootstrapNav.Link  className={item == 'Carrito' ? 'ms-md-auto' : ''} key={item} onClick={() => onSeleccion(item)}>
              {item}
            </BootstrapNav.Link>
          ))}
        </BootstrapNav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
