import React from "react";
import { Nav as BootstrapNav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav({ items, onSeleccion, carritoContador }) {
  return (
    <Navbar bg="light" expand="md" className="sticky-top py-0">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNav className='order-md-last'>
        <Button as={Link} to='/Carrito' className='fw-bold fs-3 d-flex' variant="outline-blac">
            <i className="bi bi-cart3"></i>
            <p className='mx-2 my-0'>{carritoContador}</p>
        </Button>
        </BootstrapNav>
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="me-auto w-100  align-items-center">
            {items.map((item) =>
              <BootstrapNav.Link as={Link} to={item} key={item} onClick={() => onSeleccion(item)}>
                {item}
              </BootstrapNav.Link>
            )}
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
