import React from 'react';
import { Nav as BootstrapNav, Navbar, Container } from 'react-bootstrap';


function Nav({ items, onSeleccion, counter }) {

  return (
    <Navbar bg="light" expand="md" className="sticky-top py-0" >
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav className="me-auto w-100  align-items-center">
          {items.map((item) => (
            item == 'Carrito' ?
            <BootstrapNav.Link  className={'ms-md-auto fs-2'} key={item} onClick={() => onSeleccion(item)}>
              
              <i class="bi bi-cart3"></i> 
              <p style={{display: 'contents'}} className='mx-2 fw-bold'>{counter}</p>
            </BootstrapNav.Link> :
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
