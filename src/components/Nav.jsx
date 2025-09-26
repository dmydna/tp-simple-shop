import React, { useContext, useState } from "react";
import { Nav as BootstrapNav, Button, Container, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCarrito } from "../contexts/CartContext";
import { DropdownContext } from "../contexts/DropdownContext";
import { HoverProvider } from "../contexts/HoverContext";
import HoverWrapper from "../contexts/HoverWrapper";




function Nav({items, onSeleccion}) {

  const navigate = useNavigate();
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const {isActiveDropdown , setIsActiveDropdown} = useContext(DropdownContext)
  const {contadorCarrito} = useCarrito()


  const toggleRoute = () => { 
    location.pathname == '/carrito' ? 
    navigate(-1) || navigate('/') : navigate('/carrito')
  }

  // Desactiva nav sticky top mientra dropdown se muestra dropdown

  return (
    <HoverProvider>
    <Navbar 
      bg="light" 
      expand="md"       
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      className={ !isActiveDropdown ?  'sticky-top py-0' : 'py-0'} >
      <Container>
        <Navbar.Toggle 
        aria-controls="basic-navbar-nav" />
        <BootstrapNav className='order-md-last'>
        <HoverWrapper id="carrito-btn">
          {(isHovered) => (
           <Button 
           onClick={ toggleRoute } 
           className='fw-bold fs-3 d-flex' variant="outline-black">
              <i className={`bi bi-${ 
                isHovered && location.pathname == '/carrito' ?
                'x' : 'cart3'  }`}>
              </i>
              {contadorCarrito == 0 ? '' : 
              (isHovered && location.pathname == '/carrito' ?
                  '' : 
              <span className={`position-absolute bg-dark rounded-circle`}
                 style={{width:18, height:18}}>
                <p style={{zIndex: 999, fontSize: 13}} className="text-white">
                  {contadorCarrito}
                </p>
              </span>  
              )}
          </Button>
          )}

        </HoverWrapper>
        </BootstrapNav>
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="me-auto w-100  align-items-center">
            {items.map((item) =>
              <BootstrapNav.Link 
                as={Link} to={item.toLowerCase()} key={item} 
                onClick={() => { onSeleccion(item); setExpanded(false) }}
              >
                {item}
              </BootstrapNav.Link>
            )}
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </HoverProvider>
  );
}

export default Nav;


