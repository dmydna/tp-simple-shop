import React from 'react';
import { Nav as BootstrapNav, Navbar, Container, Button } from 'react-bootstrap';


function Nav({ items, onSeleccion, counter, handleShowCart  }) {



  return (
    <Navbar bg="white" expand="md" className="sticky-top py-0 border" >
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNav className='order-md-last'>
      <Button className='fw-bold fs-3 d-flex' variant="outline-blac" onClick={handleShowCart}>
            <i className="bi bi-cart3"></i>
            <p className='mx-2 my-0'>{counter}</p>
      </Button>
      </BootstrapNav>
       <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav className="me-auto w-100  align-items-center">
          {items.map((item) => (
          <BootstrapNav.Link key={item} onClick={() => onSeleccion(item)}>
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
