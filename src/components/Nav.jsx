import React, { useContext } from "react";
import { Nav as BootstrapNav, Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DropdownContext } from "../contexts/DropdownContext";


function Nav({ items, seccion, onSeleccion, contadorCarrito}) {

  const {isActiveDropdown , setIsActiveDropdown} = useContext(DropdownContext)

  const toggleSeccionCarrito = () => { 
    seccion == 'Carrito' ? 
    onSeleccion('Productos') : 
    onSeleccion('Carrito')  
  }


  return (
    <Navbar bg="light" expand="md" className={ !isActiveDropdown ?  'sticky-top py-0' : 'py-0'} >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNav className='order-md-last'>
        <Button onClick={ () => toggleSeccionCarrito() } 
         as={Link} 
         to={ seccion != 'Carrito' ?  'Carrito' : 'Productos'} 
         className='fw-bold fs-3 d-flex' variant="outline-blac">
            <i className="bi bi-cart3"></i>
            <p className='mx-2 my-0'>{contadorCarrito}</p>
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
